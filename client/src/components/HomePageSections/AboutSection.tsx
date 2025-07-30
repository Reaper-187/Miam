export const AboutSection = () => {
  return (
    <div>
      <div className="absolute bg-blue-200 w-[50%] h-[50rem]"></div>

      <div className="relative">
        <div className="flex items-center gap-5">
          <div className="w-full flex justify-center pt-10">
            <img
              className="w-1/2 h-[750px] rounded-4xl"
              src="./img2.jpg"
              alt="img2"
            />
            <h1 className="absolute left-1/3 top-1/2 -translate-1/2 text-5xl">
              Wer sind wir
            </h1>
          </div>

          <p className="text-2xl w-1/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            aliquid numquam temporibus voluptatum corrupti dicta culpa
            recusandae modi voluptates, asperiores aut
          </p>
        </div>
      </div>
    </div>
  );
};
