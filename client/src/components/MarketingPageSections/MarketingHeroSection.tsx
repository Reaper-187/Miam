import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const MarketingHeroSection = () => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <img
          src="./service-team-work.jpg"
          alt="Kitchendevice shake Hands with Alpha"
        />
        <div className="absolute top-1/2 left-1/2 -translate-1/2 space-y-3 md:text-2xl lg:text-3xl">
          <h1 className="text-center text-black text-xl font-semibold md:text-2xl lg:text-4xl">
            Strategisch gedacht. <br /> Kreative gemacht.
          </h1>
          <p className="text-white text-center md:my-5 lg:my-10">
            Wir bringen Marken in Bewegung.
          </p>
          <div className="flex justify-center md:mt-5 lg:mt-10">
            <Button className="text-xs md:text-base lg:text-xl">
              Show me <CircleArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
