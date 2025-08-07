import { FromButton } from "../FromComp/FromButton";

export const SoftwareHeroSection = () => {
  return (
    <div className="relative">
      <img src="./software/software-title-img.jpg" alt="software-title-img" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-around w-full">
        <div className="flex flex-col text-white items-center space-y-5">
          <h1 className="text-white text-xl text-center md:text-2xl xl:text-4xl">
            Softwarelösungen, die mit Dir wachsen.
          </h1>
          <p className="text-center text-base md:text-xl xl:text-2xl ">
            Software, die deien Prozesse vereinfacht und dein Business nach
            vorne bringt.
          </p>
          <FromButton />
        </div>
      </div>
    </div>
  );
};
