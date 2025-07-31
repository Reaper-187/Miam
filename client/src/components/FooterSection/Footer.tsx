import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <div className="py-5">
      <p className="cut-line"></p>
      <div className="flex items-center justify-around">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">MIAM D Consulting</h1>
          <div className="flex gap-5">
            <Facebook />
            <Linkedin />
            <Youtube />
            <Instagram />
          </div>
        </div>

        <div className="w-1/4 flex justify-between">
          <div>
            <h5 className="font-semibold text-md">Dienste</h5>
            <ol>
              <ul>Finance</ul>
              <ul>Marketing</ul>
              <ul>Software</ul>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-md">Projekte</h5>
            <ol>
              <ul>Page</ul>
              <ul>Page</ul>
              <ul>Page</ul>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-md">Kontakt</h5>
            <p>E-Mail: email@email.com</p>
            <p>phone: +069187</p>
          </div>
        </div>
      </div>
    </div>
  );
};
