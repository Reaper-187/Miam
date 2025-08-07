import {
  type LucideIcon,
  Fingerprint,
  HandCoins,
  TextSearch,
} from "lucide-react";
import { useIsMobile } from "../../Hooks/MediaHook";
import { FromButton } from "../FromComp/FromButton";

type StrategicItemProps = {
  icon: LucideIcon;
  title: string;
};

const data: StrategicItemProps[] = [
  {
    icon: HandCoins,
    title: "Analyse & Strategie",
  },
  {
    icon: Fingerprint,
    title: "Konzept & Kreativität",
  },
  {
    icon: TextSearch,
    title: "Umsetzung & Launch",
  },
];

export const ConvictionSection = () => {
  const isMobile = useIsMobile();
  return (
    <div>
      <div className="flex justify-evenly flex-col p-1 md:flex-row">
        <div className="flex flex-col w-full gap-10 md:w-1/3 ">
          <h1 className="text-xl text-center md:text-start text-2xl lg:text-4xl">
            Warum MIAM D <br /> Consulting
          </h1>
          <p className="text-center md:text-start">
            In MIAM D setzen wir auf Werte, die deinen Erfolg und deine
            Sicherheit in den Mittelpunkt stellen. Hier sind die Gründe, warum
            wir der ideale Begleiter für deine finanzielle Reise sind:
          </p>
        </div>
        <img
          className="w-full rounded-2xl md:w-1/2"
          src="./finance/finance-talking.jpg"
          alt="finance-talking"
        />
      </div>

      <div className="flex items-center justify-evenly mt-15 flex-col md:flex-row md:px-30 lg:px-45">
        <FromButton />
        <div className="mt-1">
          <div
            className={
              !isMobile
                ? "grid grid-cols-3 gap-5 mt-5"
                : "grid grid-cols-1 gap-5"
            }
          >
            {data.map((items) => (
              <div
                key={items.title}
                className="flex items-center gap-2 md:flex-col md:text-center"
              >
                <items.icon className="w-6 h-6 md:w-10 md:h-10" />
                <span className="text-base md:text-xl">{items.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
