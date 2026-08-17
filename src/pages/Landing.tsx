import { SiteLayout } from "@/components/site/Layout";
import { Hero, TrustStrip } from "@/components/site/Hero";
import {
  IntroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/site/Services";
import { StatsSection } from "@/components/site/Trust";
import { Container, OutlineCta, PrimaryCta } from "@/components/site/ui";

function CtaBand() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          Free, no-obligation estimates
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl">
          Ready to Give Your Home a Fresh Look?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70">
          Tell us about your project and get a free estimate — or browse our
          recent work and see the finished results for yourself.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryCta href="/contact">Get a Free Estimate</PrimaryCta>
          <OutlineCta href="/work" dark>
            View Our Work
          </OutlineCta>
        </div>
      </Container>
    </section>
  );
}

export default function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesSection />
      <ShowcaseSection />
      <StatsSection />
      <CtaBand />
    </SiteLayout>
  );
}