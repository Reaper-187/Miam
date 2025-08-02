import { type LucideIcon } from "lucide-react";

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
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-semibold mb-3 text-center">
        {title.split("&").map((part, i) => (
          <span key={i}>
            {part.trim()}
            <br />
          </span>
        ))}
      </h1>
      <div className="bg-white p-2 rounded-full border-white w-fit mb-5">
        <div className="bg-[#3B8EA5] p-5 w-fit rounded-full border-white">
          <Icon size={100} />
        </div>
      </div>
      <p className="w-1/2">{description}</p>
    </div>
  );
};
