import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/headerComp/Header";
import { Home } from "./Pages/Home";
import { Marketing } from "./Pages/Marketing";
import { Finance } from "./Pages/Finance";
import { MarketingShowcaseSection } from "./components/MarketingPageSections/MarketingShowcaseSection";
import { Footer } from "./components/FooterSection/Footer";
import { Software } from "./Pages/Software";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/software" element={<Software />} />
      </Routes>
      <MarketingShowcaseSection />
      <Footer />
    </>
  );
}

export default App;
