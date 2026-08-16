import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    title: "Try the Demo Estimate Form",
    description:
      "See the quote flow the way a visitor would — a free, no-obligation estimate request at the heart of the concept.",
    href: "/#quote",
    label: "Try a demo estimate",
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

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

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
                concept. From here you can explore the full concept, try the
                estimate flow, or head to the real company's online presence.
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
              with or approved by the business. Anything you type here stays in
              this demo — it is never shared with Best Quality Painting Ltd.
              For the real company, use the phone or email below.
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