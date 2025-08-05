import { type LucideIcon } from "lucide-react";
import { useIsMobile } from "../../../Hooks/MediaHook";

type StrategicItemProps = {
  title: string;
  Icon: LucideIcon;
  description: string;
};

export const StrategicItem = ({
  title,
  Icon,
  description,
}: StrategicItemProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="group flex flex-col items-center text-center px-4">
      <h1 className="text-lg font-semibold my-3 md:text-2xl">
        {title.split("&").map((part, i) => (
          <span key={i} className="block">
            {part.trim()}
          </span>
        ))}
      </h1>

      {!isMobile && (
        <div className="bg-white p-2 rounded-full mb-4">
          <div className="bg-[#3B8EA5] p-4 md:p-5 rounded-full">
            <Icon size={80} />
          </div>
        </div>
      )}

      <p
        className={`${!isMobile ? "w-full text-sm md:text-base" : "hidden"} 
     opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
      >
        {description}
      </p>
    </div>
  );
};
