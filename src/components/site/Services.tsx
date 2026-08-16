import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, SHOWCASE, projectImage } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icons";
import { Container, Reveal, SectionHeading } from "./ui";

const PREP_POINTS = [
  "Patching",
  "Sanding",
  "Caulking",
  "Priming",
  "Surface preparation",
];

export function IntroSection() {
  return (
    <section className="overflow-hidden bg-paper py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-strong">
            Our approach
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            A Better Finish Starts With Better Preparation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A quality paint job is built before the first coat goes on. We focus
            on the preparation work — repairing, sanding, caulking, and priming —
            so every surface is ready for a smooth, even, long-lasting finish.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Throughout the project, we protect your space, keep work areas
            clean, and keep you informed from the first quote through to the
            final walkthrough.
          </p>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {PREP_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-medium text-ink/80"
              >
                <span className="grid size-5 place-items-center rounded-full bg-clay-soft text-clay-strong">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#why-us"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
          >
            Why Choose Best Quality
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={projectImage("3interior.jpg", 1200)}
              alt="Living room interior painting project by Best Quality Painting Ltd. in Winnipeg"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-md border border-ink/5 bg-paper p-4 shadow-lg sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-sm font-semibold text-ink">
              Clean, protected workspaces
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Surfaces prepped, spaces protected, and job sites kept tidy from
              start to finish.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-paper-2 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Painting Services for Every Surface"
            description="Interior and exterior painting, plus the repair and preparation work that makes the finish last — for homes and businesses across Winnipeg."
          />
          <a
            href="#quote"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep md:inline-flex"
          >
            Request an estimate
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 4) * 0.06}
              className="group flex flex-col rounded-lg border border-ink/5 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/10 hover:shadow-[0_20px_40px_-20px_rgba(20,18,15,0.18)]"
            >
              <span className="grid size-11 place-items-center rounded-md bg-clay-soft text-clay-strong transition-colors group-hover:bg-clay group-hover:text-white">
                <SiteIcon name={service.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 transition-colors group-hover:text-clay-strong"
              >
                Get a quote
                <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured services"
          title="The Projects That Transform a Home"
          description="Three of our most requested services, shown in context — prepared properly and finished with care."
        />

        <div className="mt-14 space-y-20 lg:space-y-28">
          {SHOWCASE.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <Reveal
                  className={cn(
                    "lg:col-span-7",
                    reversed && "lg:order-2",
                  )}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                <Reveal
                  delay={0.08}
                  className={cn("lg:col-span-5", reversed && "lg:order-1")}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-strong">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <a
                    href="#quote"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
                  >
                    Request a quote
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#services"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/50 hover:bg-ink/5"
          >
            Explore Our Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
