export const ServiceOverviewSection = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="w-1/4 m-auto text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi
        porro labore totam adipisci odio <br />
        <br />
        <br /> praesentium aliquam assumenda mollitia libero tempore
      </p>
      <div className="service-section">
        <div className="service-img-wrapper">
          <div className="flex items-center gap-5">
            <img
              className="service-img"
              src="./finance-service.jpg"
              alt="img1"
            />
            <h3 className="text-3xl">Finance</h3>
          </div>

          <div className="flex items-center gap-5">
            <img
              className="service-img"
              src="./service-marketing.jpg"
              alt="img1"
            />
            <h3 className="text-3xl">Marketing</h3>
          </div>
          <div className="flex items-center gap-5">
            <img className="service-img" src="./sw-service.jpg" alt="img1" />
            <h3 className="text-3xl">Sofware</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
