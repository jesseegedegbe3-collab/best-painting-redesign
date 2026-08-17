import type { ReactNode } from "react";
import { Footer, StickyMobileBar } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">{children}</main>

      <Footer />
      <div className="h-16 xl:hidden" aria-hidden />
      <StickyMobileBar />
    </div>
  );
}