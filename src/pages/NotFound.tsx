import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-paper text-ink"
    >
      <main className="flex-1 flex flex-col items-center justify-center px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-strong">
            Painter Website Demo
          </p>
          <h1 className="mt-4 text-6xl font-semibold tracking-tight text-ink sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This page rolled off the wall. Let&apos;s get you back to a finished
            one.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-clay-strong px-6 text-sm font-semibold text-white transition-colors hover:bg-clay-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2"
            >
              <ArrowLeft className="size-4" />
              Back to the concept site
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/50 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            >
              Go to my account
            </button>
          </div>
        </div>
      </main>
    </motion.div>
  );
}