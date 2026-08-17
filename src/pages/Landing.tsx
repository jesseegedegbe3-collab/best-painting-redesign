import { SiteLayout } from "@/components/site/Layout";
import { Hero, TrustStrip } from "@/components/site/Hero";
import {
  IntroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/site/Services";
import { QuoteSection } from "@/components/site/Contact";

export default function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesSection />
      <ShowcaseSection />
      <QuoteSection />
    </SiteLayout>
  );
}