import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const SoftwareLastSection = () => {
  return (
    <div className="flex justify-between px-10">
      <img
        className="w-1/3 rounded-2xl -translate-y-25"
        src="./the-successfull-g.jpg"
        alt="the-successfull-g"
      />
      <div className="w-1/2 felx self-center space-y-10 text-xl">
        <h2 className="text-3xl font-semibold">
          Lass uns gemeinsam deine Vision umsetzen
        </h2>
        <p>Von der ersten Idee bis zum skalierbaren Produkt.</p>
        <p>Melde dich für ein unverbindliches Erstgespräch.</p>
        <Button className="w-fit">
          Jetzt Buchen <CircleArrowRight />
        </Button>
      </div>
    </div>
  );
};
