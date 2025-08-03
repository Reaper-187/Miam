import { Quote } from "lucide-react";

export const QuoteSection = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-1/3">
        <div className="flex items-center gap-5">
          <Quote />
          <p className="cut-line"></p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          expedita architecto voluptas cupiditate, quisquam atque accusamus
          possimus cumque quos in?
        </p>
        <div className="flex items-center gap-5">
          <img className="rounded-full" alt="CEO-of-Kitchen-Device" />

          <p>May Cheikhkamis,</p>

          <p className="cut-line"></p>
          <Quote />
        </div>
      </div>
      <img
        className="w-1/2 rounded-2xl translate-y-25"
        src="./kitchendevice-on-Laptop.jpg"
        alt="kitchendevice-on-Laptop"
      />
    </div>
  );
};
