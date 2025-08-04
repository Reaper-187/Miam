import { CampaignSection } from "../components/MarketingPageSections/CampaignSection";
import { MarketingHeroSection } from "../components/MarketingPageSections/MarketingHeroSection";
import { MarketingLastSection } from "../components/MarketingPageSections/MarketingLastSection";
import { MarketingSolutions } from "../components/MarketingPageSections/MarketingSolutions";
import { StrategicSection } from "../components/MarketingPageSections/StrategieComp/StrategicSection";

export const Marketing = () => {
  return (
    <div>
      <MarketingHeroSection />
      <CampaignSection />
      <div className="md:my-10 lg:-translate-y-40">
        <StrategicSection />
      </div>
      <MarketingSolutions />
      <MarketingLastSection />
    </div>
  );
};
