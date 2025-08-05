import { useState } from "react";
import { Button } from "../../ui/button";
import { AnalysisCards } from "./AnalysisCards";
import { Card } from "../../ui/card";

// data Array

const analysisData = [
  {
    cardNumber: "01",
    title: "Persönliche Analyse",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi dolore beatae recusandae molestias qui quas. Sint et, sequi
            numquam eligendi, tenetur eaque sed nihil repellendus minima officia
            incidunt deserunt!`,
    imageUrl: "./kitch-device-partner.jpg",
  },
  {
    cardNumber: "02",
    title: "Individuelle Strategie",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi dolore beatae recusandae molestias qui quas. Sint et, sequi
            numquam eligendi, tenetur eaque sed nihil repellendus minima officia
            incidunt deserunt!`,
    imageUrl: "./kitch-device-partner.jpg",
  },
  {
    cardNumber: "03",
    title: "Umsetzung & Begleitung",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi dolore beatae recusandae molestias qui quas. Sint et, sequi
            numquam eligendi, tenetur eaque sed nihil repellendus minima officia
            incidunt deserunt!`,
    imageUrl: "./kitch-device-partner.jpg",
  },
];

export const FinanceAnalysisSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const showCard = (i: number) => {
    setActiveCardIndex(i);
  };
  return (
    <div className="hidden md:flex justify-evenly h-[500px] items-center bg-[#40256d] my-30">
      {analysisData.map((cardInfo, i) => (
        <Card
          key={i}
          className={i === activeCardIndex ? "w-[40%] p-5" : "hidden"}
        >
          <AnalysisCards {...cardInfo} />
        </Card>
      ))}

      <div className="flex flex-col w-1/4 space-y-5 justify-end">
        <p className="text-blue-300 text-xl">So arbeiten wir mit Dir</p>
        <h3 className="text-white lg:text-3xl">
          Strategische <br /> Finanzberatung für Deinen <br /> Erfolg.
        </h3>
        {analysisData.map((cardInfo, i) => (
          <Button
            className="text-xs lg:text-base"
            key={i}
            onClick={() => showCard(i)}
          >
            {cardInfo.cardNumber}: {cardInfo.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
