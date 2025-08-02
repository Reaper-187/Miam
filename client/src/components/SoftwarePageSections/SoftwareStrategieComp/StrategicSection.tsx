import { LocateFixed, PencilRuler, FileCode2, Database } from "lucide-react";
import { StrategicItem } from "./StrategicItem";

const data = [
  {
    title: "Analyse & Zieldefinition",
    Icon: LocateFixed,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Konzept & Architektur",
    Icon: PencilRuler,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Entwicklung & Integration",
    Icon: FileCode2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati nihil aspernatur accusamus amet molestias",
  },
  {
    title: "Betrieb & Wartung",
    Icon: Database,
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
