import { Link } from "react-router-dom";
import bg from "../../assets/image 102.png";
const Service = () => {
  return (
    <>
      {/* for large device */}
      <div className="hidden lg:contents">
        <div
          className="w-full h-[450px]"
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-gradient-to-r from-[#2C7CF1] h-full w-full grid grid-cols-2">
            <div className="text-white mt-10 ml-5">
              <h1 className="font-semibold text-4xl">
                An easy way to send <br /> requests to all suppliers
              </h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
                sed do eiusmod tempor incididunt.
              </p>
            </div>

            <div className="text-black bg-white space-y-4 py-6 px-5 my-10 mr-5 rounded-lg">
              <h1 className="text-xl font-semibold">Send quote to suppliers</h1>
              <p className="text-base border p-1 rounded-lg">
                What item you need?
              </p>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Type More Details"
              ></textarea>
              <div className="flex gap-2">
                <p className="border p-1 text-base w-52 rounded-lg">Quantity</p>
                <div className="border rounded-lg">
                  <select className="select w-28">
                    <option disabled selected>
                      PCS
                    </option>
                    <option>10-50</option>
                    <option>60-120</option>
                    <option>150-200</option>
                    <option>200-300</option>
                    <option>300-500</option>
                  </select>
                </div>
              </div>
              <button className="btn bg-[#127FFF] text-white">
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile responsive */}
      <div className="lg:hidden">
        <div className="h-40 bg-transparent relative mt-4">
          <img className="h-full" src={bg} alt="" />
          <div className="bg-gradient-to-r from-[#2C7CF1] h-40 w-full absolute top-0 p-4">
            <h1 className="text-lg font-semibold text-white mb-3">
              An easy way to send <br /> requests to all suppliers
            </h1>
            <Link to="/supplier">
              <button className="btn bg-[#0067FF] text-white btn-sm border-none">
                Send inquiry
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
