import { FromButton } from "../FromComp/FromButton";

export const SoftwareLastSection = () => {
  return (
    <div className="flex justify-between px-10">
      <img
        className="hidden md:block w-1/3 rounded-2xl -translate-y-25"
        src="./software/the-successfull-g.jpg"
        alt="the-successfull-g"
      />
      <div className="felx self-center space-y-10 p-2 md:w-1/2">
        <h2 className="text-xl font-semibold md:text-2xl">
          Lass uns gemeinsam deine Vision umsetzen
        </h2>
        <p>Von der ersten Idee bis zum skalierbaren Produkt.</p>
        <p>Melde dich für ein unverbindliches Erstgespräch.</p>
        <FromButton />
      </div>
    </div>
  );
};
