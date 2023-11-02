import { useEffect, useState } from "react";
import sofa from "../../assets/image 92.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
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
    {/* for large devices */}
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

      {/* for mobile responsive */}
    <div className="lg:hidden mt-3">
         <h1 className="text-lg font-semibold p-3">Home and outdoor</h1>
         <div className="items-center w-full gap-4 carousel md:flex lg:hidden md:w-auto">
        {homeDecors.map((product) => (
          <div
            className="carousel-item flex flex-col text-center w-1/2 space-y-2 py-2 border mx-2"
            key={product.id}
          >
            <img className=" w-28 h-24 p-2 mx-auto" src={product.img} alt="" />
            <p className="font-semibold">{product.title}</p>
            <p className="text-gray-400">
                  From
                  USD {product.price}
                </p>
          </div>
        ))}
      </div>
      <div className="text-[#0D6EFD] font-medium text-lg p-3 border-b">
        <Link className="flex items-center gap-2">Source now <BsArrowRight/></Link>
      </div>
    </div>
    </>
  );
};

export default Decor;
