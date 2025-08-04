import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const MarketingLastSection = () => {
  return (
    <>
      <div className="relative flex items-center bg-[#FDA821] mt-2 py-3 lg:h-[300px]">
        <p className="text-xl leading-10 sm:text-center lg:w-1/2 lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut provident
          atque voluptas blanditiis iste deleniti!
        </p>

        <img
          className="hidden lg:block absolute right-80 -top-10 w-1/5 rounded-2xl lg:right-50"
          src="./device-meeting.jpg"
          alt="Kitchendevice-meeting"
        />
      </div>
      <div className="flex flex-col items-center text-2xl space-y-10 px-8 xl:items-start">
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        </p>
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        </p>
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        </p>
        <Button className="text-base flex self-center lg:text-xl xl:self-start">
          jetzt Buchen <CircleArrowRight />
        </Button>
      </div>
    </>
  );
};
