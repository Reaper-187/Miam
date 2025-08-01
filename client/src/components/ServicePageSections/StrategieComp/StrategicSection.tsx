import { ChartColumnBig, Lightbulb, Rocket, Target } from "lucide-react";
import { StrategicItem } from "./StrategicItem";

const data = [
  {
    title: "Analyse & Strategie",
    Icon: ChartColumnBig,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Konzept & Kreativität",
    Icon: Lightbulb,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Umsetzung & Launch",
    Icon: Rocket,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Analyse & Optimierung",
    Icon: Target,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
];

export const StrategicSection = () => {
  return (
    <>
      {data.map((item, index) => (
        <StrategicItem
          key={index}
          title={item.title}
          Icon={item.Icon}
          description={item.description}
        />
      ))}
    </>
  );
};
