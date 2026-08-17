import { SiteLayout } from "@/components/site/Layout";
import { Hero, TrustStrip } from "@/components/site/Hero";
import {
  IntroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/site/Services";
import { BeforeAfterSection, GallerySection } from "@/components/site/Work";
import {
  AreasSection,
  ProcessSection,
  ReviewsSection,
  StatsSection,
  WhyUsSection,
} from "@/components/site/Trust";
import { FaqSection, QuoteSection } from "@/components/site/Contact";

// Everything lives on one long scrolling page — each "page" of the site is a
// section below, and every nav / footer link scrolls to its anchor.
export default function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesSection />
      <ShowcaseSection />
      <GallerySection />
      <BeforeAfterSection />
      <WhyUsSection />
      <StatsSection />
      <ProcessSection />
      <AreasSection />
      <ReviewsSection />
      <FaqSection />
      <QuoteSection />
    </SiteLayout>
  );
}