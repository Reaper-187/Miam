type MindPoint = {
  bulletPoint: string;
};

const mindPointData: MindPoint[] = [
  {
    bulletPoint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,laboriosam?",
  },
  {
    bulletPoint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,laboriosam?",
  },
  {
    bulletPoint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,laboriosam?",
  },
  {
    bulletPoint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,laboriosam?",
  },
];

export const MarketingSolutions = () => {
  return (
    <>
      <div className="flex justify-end items-center flex-col md:gap-15 lg:items-start lg:flex-row">
        <img
          className=" p-2 rounded-2xl lg:w-1/2 -translate-y-10 xl:-translate-y-30"
          src="./kitchendevice-present.jpg"
          alt="kitchendevice is doing a presentation"
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
