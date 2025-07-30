export const Header = () => {
  return (
    <>
      <div className="fixed z-100 w-full bg-transparent p-5">
        <div className="flex justify-between px-5">
          <div>
            <h1 className="lg:text-xl">MIAM D Consulting</h1>
          </div>

          <ol className="flex gap-10">
            <ul>Services</ul>
            <ul>About us</ul>
            <ul>Projects</ul>
          </ol>

          <div>
            <h1>ICON</h1>
          </div>
        </div>
      </div>
    </>
  );
};
