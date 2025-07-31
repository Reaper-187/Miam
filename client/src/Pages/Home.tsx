import { Footer } from "../components/FooterSection/Footer";
import { AboutSection } from "../components/HomePageSections/AboutSection";
import { HeroSection } from "../components/HomePageSections/HeroSection";
import { ProjectShowcaseSection } from "../components/HomePageSections/ProjectShowcaseSection";
import { ServiceOverviewSection } from "../components/HomePageSections/ServiceOverviewSection";
import "@/style/home-page.css";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceOverviewSection />
      <ProjectShowcaseSection />
      <Footer />
    </>
  );
};
