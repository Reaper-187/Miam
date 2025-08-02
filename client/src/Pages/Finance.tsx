import { ConvictionSection } from "../components/FinancePageSections/ConvictionSection";
import { FinanceAnalysisSection } from "../components/FinancePageSections/FinanceAnalysis/FinanceAnalysisSection";
import { FinanceHeroSection } from "../components/FinancePageSections/FinanceHeroSection";
import { FinanceInvestSection } from "../components/FinancePageSections/FinanceInvestSection";
import { FinanceKnowHow } from "../components/FinancePageSections/FinanceKnowHow";

export const Finance = () => {
  return (
    <>
      <FinanceHeroSection />
      <FinanceKnowHow />
      <FinanceInvestSection />
      <FinanceAnalysisSection />
      <ConvictionSection />
    </>
  );
};
