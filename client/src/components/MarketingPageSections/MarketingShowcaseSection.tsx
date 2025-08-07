import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FromButton } from "../FromComp/FromButton";
import { toast } from "sonner";

type CarouselContent = {
  title: string;
  imageUrl: string;
  description: string;
};

const analysisData: CarouselContent[] = [
  {
    title: "Project X",
    description: "Coming-Soon",
    imageUrl: "./home/finance-service.jpg",
  },
  {
    title: "Project X",
    description: "Coming-Soon",
    imageUrl: "./home/finance-service.jpg",
  },
  {
    title: "Project X",
    description: "Coming-Soon",
    imageUrl: "./home/finance-service.jpg",
  },
];

export const MarketingShowcaseSection = () => {
  return (
    <div className="text-center">
      <p className="cut-line"></p>
      <div className="flex md:w-[50%] lg:w-[80%] justify-self-center">
        <Carousel>
          <CarouselContent>
            {analysisData.map((cardContent, i) => (
              <CarouselItem key={i}>
                <div className="flex items-center justify-evenly">
                  <img
                    className="w-fit lg:w-1/2"
                    src={cardContent.imageUrl}
                    alt="img1"
                  />
                  <div className="hidden lg:block md:text-xl">
                    <h3>{cardContent.title}</h3>
                    <p>{cardContent.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </div>
      <p className="lg:w-1/2 flex justify-self-center my-5">
        Ob kleine Idee oder großes Vorhaben - unsere Projekte zeigen, wie wir
        Dinge ins Rollen bringen. Statt viel zu versprechen, lassen wir lieber
        Ergebnisse sprechen - und die Menschen, die mit uns gearbeitet haben.
      </p>
      <Button
        className="my-5"
        onClick={() => toast("not available - coming soon :)")}
      >
        Weitere Projekte <CircleArrowRight />
      </Button>

      <div className="flex flex-col justify-evenly items-center p-10 w-full bg-[#f4f3f0] md:flex-row">
        <h1 className="text-base md:text-xl lg:text-2xl">
          Bereit für den nächsten Schritt ?
        </h1>
        <div className="flex gap-5 items-center">
          <FromButton />

          <Button
            className="mt-3 text-base md:mt-0 lg:text-lg"
            onClick={() => toast("lies die anderen Pages durch moruk")}
          >
            Mehr über uns
          </Button>
        </div>
      </div>
    </div>
  );
};
