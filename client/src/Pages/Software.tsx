import { StrategicSection } from "../components/MarketingPageSections/StrategieComp/StrategicSection";
import { QuoteSection } from "../components/SoftwarePageSections/QuoteSection";
import { SoftwareAddSection } from "../components/SoftwarePageSections/SoftwareAddSection";
import { SoftwareCampaign } from "../components/SoftwarePageSections/SoftwareCampaign";
import { SoftwareHeroSection } from "../components/SoftwarePageSections/SoftwareHeroSaction";
import { SoftwareLastSection } from "../components/SoftwarePageSections/SoftwareLastSection";

export const Software = () => {
  return (
    <>
      <SoftwareHeroSection />
      <SoftwareCampaign />
      <div className="md:my-10 lg:-translate-y-40">
        <StrategicSection />
      </div>
      <QuoteSection />
      <SoftwareAddSection />
      <SoftwareLastSection />
    </>
  );
};
