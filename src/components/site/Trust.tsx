import { ArrowUpRight, MapPin, Quote, Star } from "lucide-react";
import {
  BUSINESS,
  PROCESS,
  REVIEWS,
  SERVICE_AREAS,
  STATS,
  WHY_US,
} from "@/lib/site-data";
import { SiteIcon } from "./icons";
import { Container, Reveal, SectionHeading } from "./ui";

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-paper-2 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Built on Trust, Backed by Detail"
          description="The qualities Winnipeg homeowners and businesses look for in a painting contractor — preparation, care, and clear communication."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 0.06}
              className="rounded-lg border border-ink/5 bg-paper p-6"
            >
              <span className="grid size-11 place-items-center rounded-md bg-clay-soft text-clay-strong">
                <SiteIcon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StatsSection() {
  return (
    <section aria-label="Company credentials" className="bg-ink py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 max-w-[12rem] text-xs font-medium uppercase tracking-[0.16em] text-paper/55">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A Clear Process From Quote to Walkthrough"
          description="Five straightforward steps, so you always know what happens next."
        />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {PROCESS.map((step, i) => (
            <Reveal
              key={step.step}
              as="li"
              delay={i * 0.08}
              className="relative"
            >
              {i < PROCESS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-7 top-7 hidden h-px w-[calc(100%-2.5rem)] bg-ink/10 lg:block"
                />
              )}
              <span className="relative grid size-14 place-items-center rounded-full border border-ink/10 bg-paper text-sm font-semibold tracking-tight text-clay-strong">
                {step.step}
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function AreasSection() {
  return (
    <section id="areas" className="bg-paper-2 py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Service areas"
            title="Serving Winnipeg & Surrounding Communities"
            description="A Winnipeg painting company working across the city and its surrounding neighbourhoods."
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you're refreshing a character home in River Heights or a
            newer build in Bridgwater, we bring the same careful preparation and
            clean finish to every neighbourhood.
          </p>
          <a
            href="#quote"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
          >
            Check availability in your area
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICE_AREAS.map((area, i) => (
              <Reveal
                key={area}
                as="li"
                delay={(i % 2) * 0.05}
                className="flex items-center gap-3 rounded-md border border-ink/5 bg-paper px-4 py-3.5 transition-colors hover:border-clay/40"
              >
                <span className="grid size-8 place-items-center rounded-full bg-clay-soft text-clay-strong">
                  <MapPin className="size-4" />
                </span>
                <span className="text-sm font-medium text-ink">{area}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Reviews"
            title="What Winnipeg Homeowners Say"
            description="Short excerpts from publicly displayed Google reviews of Best Quality Painting Ltd."
          />
          <Reveal
            delay={0.1}
            className="flex shrink-0 flex-col items-start gap-3 rounded-lg border border-ink/5 bg-paper-2 p-6 lg:items-end"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-semibold tracking-tight text-ink">
                5.0
              </span>
              <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-clay text-clay" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">22 Google reviews</p>
            <a
              href={BUSINESS.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
            >
              See More Reviews
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 0.08}
              className="flex flex-col rounded-lg border border-ink/5 bg-paper-2 p-6"
            >
              <Quote className="size-5 text-clay" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/85">
                “{review.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-ink/10 pt-4">
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {review.source}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
