import { useIsMobile } from "../../Hooks/MediaHook";

type OverviewData = {
  imgUrl: string;
  title: string;
};

const data: OverviewData[] = [
  { imgUrl: "./finance-service.jpg", title: "Finance" },
  { imgUrl: "./service-marketing.jpg", title: "Marketing" },
  { imgUrl: "./sw-service.jpg", title: "Software" },
];

export const ServiceOverviewSection = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <section className="flex flex-col px-4 py-10 lg:p-0 justify-between items-center flex-row">
          <p className="text-center pl-2 lg:text-2xl lg:text-start lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Dolor nisi porro labore totam adipisci odio praesentium aliquam
            <br />
            assumenda mollitia libero tempore
          </p>

          <div className="bg-[#e3cfab] rounded-2xl w-full lg:w-1/2 rounded-none ">
            <div className="flex flex-col gap-6 lg:gap-0 w-[80%]">
              {data.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center shadow gap-4 bg-white p-4 rounded-xl md:p-0 lg:bg-[unset] shadow-none "
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md lg:min-w-[80%] h-[25vh] object-cover mt-10 object-top -translate-x-10"
                  />
                  <h3 className="text-base lg:text-3xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="flex flex-col lg:flex-row items-center gap-8 px-4 py-10">
          <p className="text-center text-base lg:text-2xl lg:text-left lg:w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi
            porro labore totam adipisci odio praesentium aliquam assumenda
            mollitia libero tempore
          </p>

          <div className="bg-[#e3cfab] w-full lg:w-2/3 p-6 rounded-2xl">
            <div className="flex flex-col gap-6">
              {data.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-50 h-16 object-cover object-top rounded-md"
                  />
                  <h3 className="text-base lg:text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
