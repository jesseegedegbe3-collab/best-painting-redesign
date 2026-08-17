import { SiteLayout } from "@/components/site/Layout";
import { QuoteSection } from "@/components/site/Contact";
import { ServicesSection } from "@/components/site/Services";
import { ProcessSection } from "@/components/site/Trust";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesSection />
      <ProcessSection />
      <QuoteSection />
    </SiteLayout>
  );
}