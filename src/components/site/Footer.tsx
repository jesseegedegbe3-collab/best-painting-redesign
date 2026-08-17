import { ExternalLink, Phone } from "lucide-react";
import { BUSINESS, NAV_ITEMS } from "@/lib/site-data";
import { Container, Wordmark } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink-2 text-paper">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              Interior, exterior, residential, and commercial painting in
              Winnipeg — with careful preparation, professional workmanship, and
              a clean finish from start to final walkthrough.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-paper/75">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="transition-colors hover:text-clay"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="transition-colors hover:text-clay"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-paper/60">Winnipeg, Manitoba</li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper/75 transition-colors hover:text-clay"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
              Official Online Presence
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={BUSINESS.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-paper/85 transition-colors hover:text-clay"
                >
                  Visit Official Website
                  <ExternalLink className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.bbbProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-paper/60 transition-colors hover:text-clay"
                >
                  BBB Business Profile
                  <ExternalLink className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            Unofficial Website Redesign Concept — Created for Demonstration
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-paper/50">
            This website is an unofficial redesign concept created for
            demonstration purposes. It is not the official website of Best
            Quality Painting Ltd., and it is not affiliated with or approved by
            the business. Project imagery and review excerpts shown here are
            sourced from the official website at bestqualitypainting.ca.
          </p>
          <p className="mt-6 text-xs text-paper/40">
            © {new Date().getFullYear()} Best Quality Painting Ltd. — Redesign
            concept for demonstration only.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-paper/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur xl:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/15 text-sm font-semibold text-ink"
      >
        <Phone className="size-4" />
        Call
      </a>
      <a
        href="/contact"
        className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-clay-strong px-2 text-sm font-semibold text-white"
      >
        Get Estimate
      </a>
    </div>
  );
}
