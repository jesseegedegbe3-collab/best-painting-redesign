import { SiteLayout } from "@/components/site/Layout";
import { BeforeAfterSection, GallerySection } from "@/components/site/Work";

export default function WorkPage() {
  return (
    <SiteLayout>
      <GallerySection />
      <BeforeAfterSection />
    </SiteLayout>
  );
}