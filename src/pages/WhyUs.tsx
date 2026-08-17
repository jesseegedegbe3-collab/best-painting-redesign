import { SiteLayout } from "@/components/site/Layout";
import { StatsSection, WhyUsSection } from "@/components/site/Trust";

export default function WhyUsPage() {
  return (
    <SiteLayout>
      <WhyUsSection />
      <StatsSection />
    </SiteLayout>
  );
}