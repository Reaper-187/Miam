import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const FinanceHeroSection = () => {
  return (
    <div className="relative">
      <img src="marketing-img1.jpg" alt="device-talking" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-around w-full">
        <div className="flex flex-col text-white w-1/5 text-3xl space-y-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, cupiditate.
          </p>
          <Button>
            Jetzt Buchen <CircleArrowRight />
          </Button>
        </div>
        <h1 className="text-white text-5xl w-1/3 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
          iusto!
        </h1>
      </div>
    </div>
  );
};
