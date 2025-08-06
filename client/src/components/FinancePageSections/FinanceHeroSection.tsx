import { FromButton } from "../FromComp/FromButton";

export const FinanceHeroSection = () => {
  return (
    <div className="relative">
      <img src="marketing-img1.jpg" alt="device-talking" />

      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full md:w-1/3">
        <div className="flex justify-center flex-col items-center gap-5 md:gap-10">
          <h1 className="text-center text-white md:text-xl lg:text-3xl">
            Deine Finanzzukunft. Klar. Einfach. Erfolgreich.
          </h1>

          <p className="hidden md:block text-center text-white md:text-xl lg:text-2xl">
            Wir gestalten deine finanzielle Freiheit
          </p>
          <FromButton />
        </div>
      </div>
    </div>
  );
};
