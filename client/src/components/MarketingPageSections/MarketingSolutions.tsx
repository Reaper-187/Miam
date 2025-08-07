type MindPoint = {
  bulletPoint: string;
};

const mindPointData: MindPoint[] = [
  {
    bulletPoint: "- Social-Media-Kampagnen mit Reichweite",
  },
  {
    bulletPoint: "- Performance-Marketing & Google Ads",
  },
  {
    bulletPoint: "- Branding & Design, das hängen bleibt",
  },
  {
    bulletPoint: "- E-Mail- & Funnelstrategien, die konvertieren",
  },
];

export const MarketingSolutions = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col md:gap-15 lg:items-start lg:flex-row">
        <img
          className=" p-2 rounded-2xl lg:w-1/2 -translate-y-10 xl:-translate-y-30"
          src="./marketing/marketing-presentation.jpg"
          alt="marketing-presentation"
        />

        <ul className="space-y-5 text-xl text-center mr-5 lg:text-start">
          {mindPointData.map((eachBullet, i) => (
            <li key={i}>{eachBullet.bulletPoint}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
