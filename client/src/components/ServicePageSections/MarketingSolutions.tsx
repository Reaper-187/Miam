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
    <div>
      <div className="flex justify-end items-center gap-15">
        <img
          className="w-1/2 translate-y-15 rounded-2xl"
          src="./kitchendevice-present.jpg"
          alt="kitchendevice is doing a presentation"
        />

        <ul className="space-y-5 text-xl mr-5">
          {mindPointData.map((eachBullet, i) => (
            <li key={i}>{eachBullet.bulletPoint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
