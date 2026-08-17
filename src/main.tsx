import '@vly-ai/integrations';
import { Toaster } from "@/components/ui/sonner";
import { RequireAuth } from "@/components/RequireAuth";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import "./index.css";
import "./types/global.d.ts";

// Pages load eagerly — no runtime dynamic imports, so route modules can never
// fail to fetch mid-session (kept static after repeated dev-server races).
import Landing from "./pages/Landing.tsx";
import AuthPage from "./pages/Auth.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

// The site is one long scrolling page; old page URLs redirect to their section.
const SECTION_REDIRECTS = [
  { path: "/services", hash: "#services" },
  { path: "/work", hash: "#work" },
  { path: "/why-us", hash: "#why-us" },
  { path: "/areas", hash: "#areas" },
  { path: "/reviews", hash: "#reviews" },
  { path: "/faq", hash: "#faq" },
  { path: "/contact", hash: "#contact" },
] as const;

// Scroll to the anchored section on load/navigation, otherwise to the top
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash && hash.startsWith("#")) {
      if (hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);



function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Landing />} />
            {SECTION_REDIRECTS.map(({ path, hash }) => (
              <Route
                key={path}
                path={path}
                element={<Navigate to={`/${hash}`} replace />}
              />
            ))}
            <Route
              path="/auth"
              element={<AuthPage redirectAfterAuth="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);
