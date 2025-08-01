import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const ServiceHeroSection = () => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <img
          src="./service-team-work.jpg"
          alt="Kitchendevice shake Hands with Alpha"
        />
        <div className="absolute top-1/3 left-1/2 -translate-1/2 text-5xl">
          <h1 className="text-center text-black text-7xl">
            Strategisch gedacht. <br /> Kreative gemacht.
          </h1>
          <p className="my-10 text-white">Wir bringen Marken in Bewegung.</p>
          <div className="flex justify-center mt-10">
            <Button className="text-xl">
              Show me <CircleArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
