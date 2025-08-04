import {
  Fingerprint,
  HandCoins,
  TextSearch,
  type LucideIcon,
} from "lucide-react";
import { useIsMobile } from "../../Hooks/MediaHook";

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

export const SoftwareAddSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="h-[350px] bg-[#18A999] md:h-[400px] xl:h-[550px]">
        <div className="flex flex-col justify-evenly items-center h-full md:flex-row">
          <p className="w-full p-2 text-center md:text-start md:text-xl md:w-1/2 lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            porro placeat veniam similique atque animi facere dolorum deleniti
            nobis molestias?
          </p>

          <div className="flex flex-col mt-5 text-2xl md:flex-row">
            <div
              className={
                !isMobile ? "grid grid-cols-3 gap-5" : "grid grid-cols-1 gap-5"
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
    </>
  );
};
