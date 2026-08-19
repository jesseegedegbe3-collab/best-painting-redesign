import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BUSINESS, NAV_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Container, PrimaryCta, Wordmark } from "./ui";

export function DisclaimerBar() {
  return (
    <div className="bg-ink text-paper">
      <Container className="flex max-w-7xl items-center justify-between gap-4 py-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">
          Unofficial Website Redesign Concept
        </p>
        <p className="hidden text-[11px] text-paper/60 sm:block">
          Created for demonstration
        </p>
      </Container>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <DisclaimerBar />
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-all duration-300",
          scrolled ? "border-ink/10 shadow-[0_1px_20px_rgba(20,18,15,0.06)]" : "border-transparent",
        )}
      >
        <Container
          className={cn(
            "flex max-w-7xl flex-nowrap items-center justify-between gap-6 transition-all duration-300",
            scrolled ? "py-3" : "py-4",
          )}
        >
          <Link
            to="/"
            className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            aria-label="Best Quality Painting Ltd. — homepage"
          >
            <Wordmark />
          </Link>

          {/* Full desktop nav — fits comfortably at xl and up */}
          <nav
            className="hidden shrink-0 items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-clay-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center xl:flex">
            <PrimaryCta
              href="/contact"
              className="h-11 whitespace-nowrap px-5"
              arrow={false}
            >
              Get a Free Estimate
            </PrimaryCta>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 place-items-center rounded-md border border-ink/10 text-ink xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </header>

      {/* Mobile / tablet menu (below xl) — scrolls if the screen is short */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-paper px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 transition-opacity xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 text-xl font-medium text-ink transition-colors hover:text-clay-strong"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <PrimaryCta href="/contact" className="w-full" arrow={false}>
            Get a Free Estimate
          </PrimaryCta>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-ink/20 text-sm font-semibold text-ink"
          >
            <Phone className="size-4" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}