export const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
      <div className="hidden lg:flex items-center justify-evenly bg-[#e3cfab] w-full lg:w-1/2">
        <div className="relative flex justify-center items-center py-2">
          <h1 className="absolute text-black text-[3vw]">Wer sind wir</h1>
          <img className="w-1/2 rounded-2xl" src="./img2.jpg" alt="img1" />
        </div>
      </div>

      <p className="w-full px-4 text-center lg:text-2xl lg:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi
        porro labore totam adipisci odio, praesentium aliquam assumenda mollitia
        libero tempore
      </p>
    </div>
  );
};
