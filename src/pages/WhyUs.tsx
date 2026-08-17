import { SiteLayout } from "@/components/site/Layout";
import { AreasSection, StatsSection, WhyUsSection } from "@/components/site/Trust";

export default function WhyUsPage() {
  return (
    <SiteLayout>
      <WhyUsSection />
      <StatsSection />
      <AreasSection />
    </SiteLayout>
  );
}