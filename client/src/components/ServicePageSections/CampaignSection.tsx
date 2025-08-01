import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { MarketingSolutions } from "./MarketingSolutions";
import { StrategicSection } from "./StrategieComp/StrategicSection";
import { MarketingShowcaseSection } from "./MarketingShowcaseSection";
import { Footer } from "../FooterSection/Footer";

export const CampaignSection = () => {
  return (
    <div>
      <div className="h-[350px] flex justify-center bg-[#FDA821]">
        <p className="text-center w-1/2 text-3xl pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          ducimus eius repudiandae sapiente ad, inventore reprehenderit fugiat
        </p>
      </div>
      <div className="flex justify-evenly -translate-y-40">
        <StrategicSection />
      </div>
      <MarketingSolutions />
      <div>
        <div className="flex items-center bg-[#FDA821] h-[550px] p-5">
          <p className="w-1/5 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            provident atque voluptas blanditiis iste deleniti!
          </p>
        </div>
        <div className="relative flex items-center justify-between">
          <div className="text-2xl space-y-10 p-5">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              atque, quaerat quasi
            </p>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            </p>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            </p>
            <Button className="text-xl">
              jetzt Buchen <CircleArrowRight />
            </Button>
          </div>
          <img
            className="absolute right-10 -top-130 w-1/3 rounded-2xl"
            src="./device-meeting.jpg"
            alt="Kitchendevice-meeting"
          />
        </div>
      </div>

      <MarketingShowcaseSection />
      <Footer />
    </div>
  );
};
