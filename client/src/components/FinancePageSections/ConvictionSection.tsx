import {
  CircleArrowRight,
  Fingerprint,
  HandCoins,
  TextSearch,
} from "lucide-react";
import { Button } from "../ui/button";

export const ConvictionSection = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="flex flex-col w-1/3 gap-10 ">
          <h1 className="text-5xl">
            Warum MIAM D <br /> Consulting
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
            cumque reiciendis? Nihil deleniti expedita mollitia esse possimus,
            aspernatur voluptates.
          </p>
        </div>
        <img
          className="w-1/3 rounded-2xl"
          src="./device-is-talking.jpg"
          alt="device-is-talking"
        />
      </div>
      <div>
        <div className="flex justify-between items-center px-45 mt-15">
          <Button className="text-xl p-6">
            jetzt Buchen <CircleArrowRight />
          </Button>
          <img className="w-1/3 rotate-180" src="./arrow.png" alt="" />
          <div className="flex gap-20 text-xl">
            <div>
              <HandCoins size={50} />
              <p>
                Unabhängige <br />
                Beratung
              </p>
            </div>
            <div>
              <Fingerprint size={50} />
              <p>
                Digital & <br />
                Persönlich
              </p>
            </div>
            <div>
              <TextSearch size={50} />
              <p>
                Transparente <br /> Kosten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
