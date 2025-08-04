import { Quote } from "lucide-react";

export const QuoteSection = () => {
  return (
    <div className="flex justify-evenly px-3">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-5">
          <Quote />
          <p className="cut-line"></p>
        </div>
        <p className="text-xs md:text-base lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          expedita architecto voluptas cupiditate, quisquam atque accusamus
          possimus cumque quos in?
        </p>
        <div className="flex items-center gap-5">
          <img
            className="hidden md:block rounded-full"
            alt="CEO-of-Kitchen-Device"
          />

          <p>May Cheikhkamis,</p>

          <p className="cut-line"></p>
          <Quote />
        </div>
      </div>
      <img
        className="hidden lg:block w-1/2 rounded-2xl xl:translate-y-25"
        src="./kitchendevice-on-Laptop.jpg"
        alt="kitchendevice-on-Laptop"
      />
    </div>
  );
};
