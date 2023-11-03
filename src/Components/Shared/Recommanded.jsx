import axios from "axios";
import { useEffect, useState } from "react";

const Recommanded = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("recommended.json").then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <>
      <div className="p-2 mt-3 lg:p-0 lg:my-8">
        <h1 className="text-xl md:text-3xl font-semibold text-black">
          Recommended items
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 bg-slate-100 px-2 md:px-4 lg:px-0">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white text-center border p-3 py-5 rounded-md"
          >
            <img
              className="w-36 bg-white mx-auto h-40 p-2"
              src={item.img}
              alt=""
            />
            <p className="text-black font-medium">${item.price}</p>
            <p className="text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommanded;
