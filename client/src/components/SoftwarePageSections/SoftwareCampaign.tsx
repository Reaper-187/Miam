import { StrategicSection } from "./SoftwareStrategieComp/StrategicSection";

export const SoftwareCampaign = () => {
  return (
    <div>
      <div className="h-[350px] flex justify-center bg-[#18A999]">
        <p className="text-center w-1/2 text-3xl pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          ducimus eius repudiandae sapiente ad, inventore reprehenderit fugiat
        </p>
      </div>
      <div className="flex justify-evenly -translate-y-40">
        <StrategicSection />
      </div>
    </div>
  );
};
