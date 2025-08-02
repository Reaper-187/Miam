type AnalysisItemProps = {
  cardNumber: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const AnalysisCards = ({
  cardNumber,
  title,
  description,
  imageUrl,
}: AnalysisItemProps) => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-3">
        <p className="text-2xl">{cardNumber}</p>
        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
        <img className="rounded-xl" src={imageUrl} alt="karikatur" />
      </div>
    </>
  );
};
