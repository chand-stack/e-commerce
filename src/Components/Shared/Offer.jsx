import { useEffect, useState } from "react";

const Offer = () => {
  const [products, setProducts] = useState([]);
  const [countdownValues, setCountdownValues] = useState({
    days: 4,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    fetch("discount.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 border p-3">
        <div className="flex md:flex-col gap-4 lg:mt-5">
          <div>
            <h1 className="text-xl font-semibold">Deals and offers</h1>
            <p className="text-gray-500">Hygiene equipments</p>
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-gray-200 lg:bg-gray-600 rounded-box text-neutral-content">
              <span className="countdown font-mono text-gray-500 lg:text-gray-300 text-3xl md:text-5xl">
                <span style={{ "--value": countdownValues.days }}>
                  {countdownValues.days}
                </span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-gray-200 lg:bg-gray-600 rounded-box text-neutral-content">
              <span className="countdown font-mono text-gray-500 lg:text-gray-300 text-3xl md:text-5xl">
                <span style={{ "--value": countdownValues.hours }}>
                  {countdownValues.hours}
                </span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-gray-200 lg:bg-gray-600 rounded-box text-neutral-content">
              <span className="countdown font-mono text-gray-500 lg:text-gray-300 text-3xl md:text-5xl">
                <span style={{ "--value": countdownValues.minutes }}>
                  {countdownValues.minutes}
                </span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-gray-200 lg:bg-gray-600 rounded-box text-neutral-content">
              <span className="countdown font-mono text-gray-500 lg:text-gray-300 text-3xl md:text-5xl">
                <span style={{ "--value": countdownValues.seconds }}>
                  {countdownValues.seconds}
                </span>
              </span>
              sec
            </div>
          </div>
        </div>

        <div className="items-center col-span-2 w-full gap-4 hidden lg:flex justify-between md:w-auto mt-5 py-3">
          {products.map((product) => (
            <div
              className=" flex flex-col text-center border-l space-y-2"
              key={product.id}
            >
              <img className=" w-40 h-36 mx-auto" src={product.img} alt="" />
              <p>{product.title}</p>
              <p className="text-[#EB001B] bg-[#FFE3E3] rounded-full p-1 w-20 mx-auto">
                -{product.discount}%
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="items-center w-full gap-4 carousel md:flex lg:hidden md:w-auto border mt-5 py-3">
        {products.map((product) => (
          <div
            className="carousel-item flex flex-col text-center w-1/2 space-y-2"
            key={product.id}
          >
            <img className=" w-40 h-36 mx-auto" src={product.img} alt="" />
            <p>{product.title}</p>
            <p className="text-[#EB001B] bg-[#FFE3E3] rounded-full p-1">
              -{product.discount}%
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Offer;
