import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const MarketingShowcaseSection = () => {
  return (
    <div className="text-center">
      <p className="cut-line"></p>
      <div className="flex md:w-[50%] lg:w-[80%] justify-self-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex">
                <img
                  className="w-fit lg:w-1/2"
                  src="./finance-service.jpg"
                  alt="img1"
                />
                <div className="hidden lg:block">
                  <h3>Projekt X</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem eveniet corrupti ducimus repellat obcaecati
                    ut quo eius, deleniti amet nihil.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img
                className="w-fit lg:w-1/2"
                src="./finance-service.jpg"
                alt="img1"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="w-fit lg:w-1/2"
                src="./finance-service.jpg"
                alt="img1"
              />
            </CarouselItem>
          </CarouselContent>
          <span className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </div>
      <p className="lg:w-1/2 flex justify-self-center my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        voluptates magnam impedit quam voluptatibus! Eum quis dolorum ut
        dolores, magni excepturi, amet fuga ipsa architecto sit dolore
        voluptatibus, illum a.
      </p>
      <Button className="my-5">
        Weitere Projekte <CircleArrowRight />
      </Button>

      <div className="flex flex-col justify-evenly items-center p-10 w-full bg-[#E3CFAB] md:flex-row">
        <h1 className="text-base md:text-xl lg:text-2xl">
          Bereit für den nächsten Schritt ?
        </h1>
        <div className="flex gap-5 items-center">
          <Button className="mt-3 md:mt-0 lg:text-xl">Termin buchen</Button>
          <Button className="mt-3 md:mt-0 lg:text-xl">Mehr über uns</Button>
        </div>
      </div>
    </div>
  );
};
