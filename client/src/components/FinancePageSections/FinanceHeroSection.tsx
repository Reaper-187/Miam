import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const FinanceHeroSection = () => {
  return (
    <div className="relative">
      <img src="marketing-img1.jpg" alt="device-talking" />

      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full md:w-1/3">
        <div className="flex justify-center flex-col items-center gap-5 md:gap-10">
          <h1 className="text-center text-white md:text-xl lg:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            sapiente?
          </h1>

          <p className="hidden md:block text-center text-white md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, cupiditate.
          </p>
          <Button>
            Jetzt Buchen <CircleArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
