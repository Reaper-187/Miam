import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const SoftwareHeroSection = () => {
  return (
    <div className="relative">
      <img src="device-try-to-code.jpg" alt="device-try-to-code" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-around w-full">
        <div className="flex flex-col text-white w-1/2 items-center text-3xl space-y-15">
          <h1 className="text-white text-5xl text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, iusto!
          </h1>
          <p className="text-center text-red-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, cupiditate.
          </p>
          <Button className="w-fit">
            Jetzt Buchen <CircleArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
