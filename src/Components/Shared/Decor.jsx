import { useEffect, useState } from "react";
import sofa from "../../assets/image 92.png";
const Decor = () => {
  const [homeDecors, setHomeDecors] = useState([]);

  useEffect(() => {
    fetch("home.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeDecors(data);
      });
  }, []);

  return (
    <>
      <div className="hidden lg:flex my-5">
        <div className="relative">
          <img src={sofa} alt="" />
          <div className="absolute top-4 left-3">
            <h1 className="text-xl font-semibold">
              Home and <br /> outdoor
            </h1>
            <button className="btn bg-white text-black mt-5">Source now</button>
          </div>
        </div>
        <div className="grid grid-cols-4 flex-grow ">
          {homeDecors.map((item) => (
            <div key={item.id} className="flex bg-white py-3 px-2 border">
              <div className="flex-grow mb-4">
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-gray-400">
                  From <br />
                  USD {item.price}
                </p>
              </div>
              <img className="" src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Decor;
