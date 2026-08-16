import { CheckCircle2, Phone } from "lucide-react";
import { BUSINESS, TRUST_STRIP, projectImage } from "@/lib/site-data";
import { Container, OutlineCta, PrimaryCta } from "./ui";

const HERO_STATS = [
  { value: "500+", label: "Projects" },
  { value: "15+", label: "Years Experience" },
  { value: "5-Year", label: "Warranty" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <img
        src={projectImage("1interior.jpg", 1920)}
        alt="Interior wall repaint project by Best Quality Painting Ltd. in Winnipeg"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 to-transparent" />

      <Container className="relative flex min-h-[88vh] flex-col justify-center pt-16 pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            Winnipeg Painting Company
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-paper text-balance sm:text-6xl lg:text-7xl">
            Premium Painting.
            <br />
            Done Right.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Interior, exterior, residential, and commercial painting in
            Winnipeg — with careful preparation, professional workmanship, and a
            clean finish from start to final walkthrough.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCta href="#quote">Get a Free Estimate</PrimaryCta>
            <OutlineCta href="#work" dark>
              View Our Work
            </OutlineCta>
          </div>

          <a
            href={BUSINESS.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-clay"
          >
            <Phone className="size-4" />
            Call {BUSINESS.phoneDisplay}
          </a>

          <dl className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-paper/15 pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="max-w-[6.5rem] text-xs font-medium uppercase tracking-wider text-paper/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="Key credentials" className="border-b border-ink/10 bg-paper-2">
      <Container className="py-8 sm:py-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_STRIP.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium text-ink/80"
            >
              <CheckCircle2 className="size-4 shrink-0 text-clay-strong" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
