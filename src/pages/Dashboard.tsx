import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ArrowRight, ArrowUpRight, Loader2, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { BUSINESS } from "@/lib/site-data";
import { DisclaimerBar } from "@/components/site/Header";
import { Container, Reveal, Wordmark } from "@/components/site/ui";

const QUICK_LINKS = [
  {
    title: "Explore the Concept",
    description:
      "Walk through the full redesign — services, portfolio, before-and-after comparisons, service areas, and reviews.",
    href: "/",
    label: "View the concept site",
    external: false,
  },
  {
    title: "Try the Quote Form",
    description:
      "Submit an estimate request the way a visitor would — it lands in the inbox below, straight from the database.",
    href: "/contact",
    label: "Try the quote flow",
    external: false,
  },
  {
    title: "Visit the Real Business",
    description:
      "This concept is not connected to Best Quality Painting Ltd. Reach the company through its official website or BBB profile.",
    href: BUSINESS.officialSite,
    label: "Official website",
    external: true,
  },
];

function formatSubmittedAt(timestamp: number) {
  return new Date(timestamp).toLocaleString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const quoteRequests = useQuery(api.quotes.list);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <DisclaimerBar />

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-3.5">
          <a
            href="/"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            aria-label="Back to the concept homepage"
          >
            <Wordmark />
          </a>
          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-ink/20 px-4 text-sm font-semibold text-ink transition-colors hover:border-ink/50 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            Sign out
          </button>
        </Container>
      </header>

      <main id="main">
        <section className="border-b border-ink/10 bg-ink">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                Painter Website Demo — Workspace
              </p>
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl">
                Welcome{user?.name ? `, ${user.name}` : " to the demo"}.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
                You're signed in to the account area of the website redesign
                concept. This is where incoming quote requests would show up for
                a painting business — stored live in the demo's database.
              </p>
            </Reveal>
          </Container>
        </section>

        <Container className="py-16 sm:py-20">
          <section aria-label="Shortcuts" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_LINKS.map((link, i) => (
              <Reveal
                key={link.title}
                delay={i * 0.06}
                className="group flex flex-col rounded-lg border border-ink/5 bg-paper-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/10"
              >
                <h2 className="text-base font-semibold tracking-tight text-ink">
                  {link.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {link.description}
                </p>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
                >
                  {link.label}
                  {link.external ? (
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  ) : (
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </a>
              </Reveal>
            ))}
          </section>

          <section
            aria-label="Quote requests"
            className="mt-12 rounded-lg border border-ink/5 bg-paper-2 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-strong">
                  Inbox
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Quote Requests
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Every submission of the estimate form on the concept site is
                  stored in the demo's database and appears here instantly.
                  Requests are never sent to Best Quality Painting Ltd.
                </p>
              </div>
              {quoteRequests && quoteRequests.length > 0 && (
                <span className="rounded-full bg-clay-soft px-3 py-1 text-xs font-semibold text-clay-strong">
                  {quoteRequests.length} request{quoteRequests.length === 1 ? "" : "s"}
                </span>
              )}
            </div>

            <div className="mt-7">
              {quoteRequests === undefined ? (
                <div className="flex items-center gap-3 rounded-lg border border-ink/5 bg-paper px-5 py-6 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin" />
                  Loading requests…
                </div>
              ) : quoteRequests.length === 0 ? (
                <div className="rounded-lg border border-dashed border-ink/15 bg-paper px-5 py-10 text-center">
                  <p className="text-sm font-medium text-ink">
                    No quote requests yet
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Submit the estimate form on the homepage to see it appear
                    here in real time.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {quoteRequests.map((request) => (
                    <li
                      key={request._id}
                      className="rounded-lg border border-ink/5 bg-paper p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-ink">
                            {request.name}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {formatSubmittedAt(request.submittedAt)}
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-ink/10 bg-paper-2 px-3 py-1 text-xs font-semibold text-ink/70">
                          {request.projectType}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink/80">
                        {request.message}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-3 text-sm">
                        <a
                          href={`tel:${request.phone.replace(/[^+\d]/g, "")}`}
                          className="inline-flex items-center gap-1.5 font-medium text-ink/70 transition-colors hover:text-clay-strong"
                        >
                          <Phone className="size-3.5" />
                          {request.phone}
                        </a>
                        <a
                          href={`mailto:${request.email}`}
                          className="inline-flex items-center gap-1.5 font-medium text-ink/70 transition-colors hover:text-clay-strong"
                        >
                          <Mail className="size-3.5" />
                          {request.email}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section
            aria-label="About this demo"
            className="mt-12 rounded-lg border border-ink/5 bg-ink p-8 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              About this demo
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper/75">
              Painter Website (Demo) is an unofficial website redesign concept
              for Best Quality Painting Ltd., created for demonstration
              purposes. It is not the company's website and is not affiliated
              with or approved by the business. Quote requests you submit are
              stored only in this demo's database and are never shared with
              Best Quality Painting Ltd. For the real company, use the phone or
              email below.
            </p>
            <p className="mt-6 text-sm text-paper/60">
              {BUSINESS.phoneDisplay} · {BUSINESS.email}
            </p>
          </section>
        </Container>
      </main>
    </div>
  );
}