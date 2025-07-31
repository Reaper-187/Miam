import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="fixed z-100 w-full bg-transparent p-5">
        <div className="flex justify-between px-5">
          <div>
            <h1 className="lg:text-xl">MIAM D Consulting</h1>
          </div>

          <ol className="flex gap-10">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
          </ol>

          <div>
            <h1>ICON</h1>
          </div>
        </div>
      </div>
    </>
  );
};
