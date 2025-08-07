import { useState } from "react";
import { AnalysisCards } from "./AnalysisCards";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// data Array

const analysisData = [
  {
    cardNumber: "01",
    title: "Persönliche Analyse",
    description:
      "Wir beleuchten Ihr Unternehmen von allen Seiten - mit klaren Daten, fundierten Erkenntnissen und maßgeschneiderten Insights. Durch eine tiefgehende Analyse identifizieren wir Stärken, Schwächen und ungenutzte Potenziale, um die richtigen Entscheidungsgrundlagen zu schaffen. Denn nur wer sein Geschäft wirklich versteht, kann nachhaltig wachsen.",
    imageUrl: "./finance/analyse.jpg",
  },
  {
    cardNumber: "02",
    title: "Individuelle Strategie",
    description:
      "Kein Standardkonzept, sondern eine maßgeschneiderte Roadmap für Ihren Erfolg. Gemeinsam entwickeln wir eine klare Strategie, die zu Ihren Zielen, Ressourcen und Marktchancen passt - präzise, umsetzbar und zukunftsorientiert. Denn der beste Plan ist der, der nicht nur auf dem Papier steht, sondern auch funktioniert.",
    imageUrl: "./finance/card-strategie.jpg",
  },
  {
    cardNumber: "03",
    title: "Umsetzung & Begleitung",
    description:
      "Strategien sind nur so gut wie ihre Umsetzung. Deshalb unterstützen wir Sie nicht nur bei der Planung, sondern auch bei der praktischen Realisierung - mit Expertise, pragmatischen Lösungen und kontinuierlicher Begleitung. So sichern wir nicht nur kurzfristige Erfolge, sondern nachhaltige Ergebnisse.",
    imageUrl: "./finance/card-support.jpg",
  },
];

export const FinanceAnalysisSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return (
    <div className="hidden md:flex justify-evenly h-[500px] items-center bg-[#40256d] my-30">
      <div className="w-[40%] p-5">
        <AnimatePresence mode="wait">
          {analysisData.map(
            (cardInfo, i) =>
              activeCardIndex === i && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-2">
                    <AnalysisCards {...cardInfo} />
                  </Card>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col w-1/4 space-y-5 justify-end">
        <p className="text-blue-300 text-xl">So arbeiten wir mit Dir</p>
        <h3 className="text-white lg:text-3xl">
          Strategische <br /> Finanzberatung für Deinen <br /> Erfolg.
        </h3>
        {analysisData.map((cardInfo, i) => (
          <Button
            className="text-xs cursor-pointer lg:text-base"
            key={i}
            onClick={() => setActiveCardIndex(i)}
          >
            {cardInfo.cardNumber}: {cardInfo.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
