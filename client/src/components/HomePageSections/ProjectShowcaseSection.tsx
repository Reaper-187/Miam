import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const ProjectShowcaseSection = () => {
  return (
    <div className="text-center">
      <p className="cut-line"></p>
      <div className="flex w-[50%] justify-self-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex">
                <img className="w-1/2" src="./finance-service.jpg" alt="img1" />
                <div>
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
              <img className="w-1/2" src="./finance-service.jpg" alt="img1" />
            </CarouselItem>
            <CarouselItem>
              <img className="w-1/2" src="./finance-service.jpg" alt="img1" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <p className="w-1/2 flex justify-self-center my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        voluptates magnam impedit quam voluptatibus! Eum quis dolorum ut
        dolores, magni excepturi, amet fuga ipsa architecto sit dolore
        voluptatibus, illum a.
      </p>
      <Button className="my-5">
        Weitere Projekte <CircleArrowRight />
      </Button>

      <div className="flex justify-evenly items-center p-10 w-full bg-[#f4f3f0]">
        <h1 className="text-4xl">Bereit für den nächsten Schritt ?</h1>
        <div className="flex gap-5 items-center">
          <Button className="text-xl">Termin buchen</Button>
          <Button className="text-xl">Mehr über uns</Button>
        </div>
      </div>
    </div>
  );
};
