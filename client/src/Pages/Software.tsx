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
      <QuoteSection />
      <SoftwareAddSection />
      <SoftwareLastSection />
    </>
  );
};
