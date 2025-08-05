import { ChartColumnBig, Lightbulb, Rocket, Target } from "lucide-react";
import { StrategicItem } from "./StrategicItem";

const data = [
  {
    title: "Analyse & Strategie",
    Icon: ChartColumnBig,
    description:
      "Wir lernen dich, dein Angebot und deine Zielgruppe kennen - und entwickeln eine passagenaue Marketingstrategie",
  },
  {
    title: "Konzept & Kreativität",
    Icon: Lightbulb,
    description:
      "Ob Kampagne, Content oder Branding - wir entwicheln starke Ideen mit Wiederekennungswert.",
  },
  {
    title: "Umsetzung & Launch",
    Icon: Rocket,
    description:
      "Wir bringen deine Botschaft auf den richtigen Kanal - effizient, zielgerichtet und wirkungsvoll.",
  },
  {
    title: "Analyse & Optimierung",
    Icon: Target,
    description:
      "Wir messen, was wirkt - und optimieren laufend für noch bessere Ergebnisse.",
  },
];

export const StrategicSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {data.map((item, index) => (
        <StrategicItem
          key={index}
          title={item.title}
          Icon={item.Icon}
          description={item.description}
        />
      ))}
    </div>
  );
};
