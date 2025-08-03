import { Fingerprint, HandCoins, TextSearch } from "lucide-react";

export const SoftwareAddSection = () => {
  return (
    <>
      <div className="h-[550px] bg-[#18A999]">
        <div className="flex justify-evenly items-center h-full">
          <p className="w-1/3 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            porro placeat veniam similique atque animi facere dolorum deleniti
            nobis molestias?
          </p>
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
    </>
  );
};
