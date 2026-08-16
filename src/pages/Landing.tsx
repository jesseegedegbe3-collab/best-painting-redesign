import { Header } from "@/components/site/Header";
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
import { Footer, StickyMobileBar } from "@/components/site/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
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
      </main>

      <Footer />
      <div className="h-16 lg:hidden" aria-hidden />
      <StickyMobileBar />
    </div>
  );
}
