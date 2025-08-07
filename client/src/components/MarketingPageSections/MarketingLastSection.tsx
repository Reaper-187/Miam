import { FromButton } from "../FromComp/FromButton";

export const MarketingLastSection = () => {
  return (
    <>
      <div className="relative flex items-center bg-[#b12226] mt-2 py-3 lg:h-[300px]">
        <p className="text-xl leading-10 sm:text-center lg:w-1/2 lg:text-2xl">
          Wir kombinieren Kreativität, Strategie und datenbasierte Analysen, um
          für Sie nachhaltige Ergebnisse zu erzielen.
        </p>

        <img
          className="hidden lg:block absolute right-80 -top-10 w-1/5 rounded-2xl lg:right-50"
          src="./marketing/marketing-meeting.jpg"
          alt="Kitchendevice-meeting"
        />
      </div>
      <div className="flex flex-col items-center text-2xl space-y-10 p-8 xl:items-start">
        <p className="text-base md:text-2xl">
          Lass uns dein nächstes Kapitel <br /> gemeinsam schreiben.
        </p>
        <p className="text-base md:text-xl">
          Du hast ein Ziel - wir haben den Plan.
        </p>
        <p className="text-base md:text-xl">
          Melde dich für ein unverbindliches Erstgespräch
        </p>
        <FromButton />
      </div>
    </>
  );
};
