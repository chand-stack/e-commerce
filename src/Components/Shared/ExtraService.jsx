import { BsSearch, BsBoxSeam } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import img1 from "../../assets/image 104.png";
import img2 from "../../assets/image 106.png";
import img3 from "../../assets/image 107.png";
import img4 from "../../assets/image 108.png";

const ExtraService = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-3xl font-semibold text-black p-2 mt-3 lg:p-0 lg:my-8">
          Our extra services
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5 px-2 md:px-0">
        <div className="rounded-md relative">
          <img className="w-full rounded-md rounded-b-none" src={img1} alt="" />
          <div className="flex justify-around bg-white py-4">
            <p className="text-base font-medium">
              Source from <br />
              Industry Hubs
            </p>
            <div>
              <div className="hidden lg:contents">
              <div className="bg-[#D1E7FF] absolute top-1/2 p-3 right-10 rounded-full border-2 border-white">
                <BsSearch className="text-2xl "></BsSearch>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md relative">
          <img className="w-full rounded-md rounded-b-none" src={img2} alt="" />
          <div className="flex justify-around bg-white py-4">
            <p className="text-base font-medium">
              Customize Your <br /> Products
            </p>
            <div>
              <div className="hidden lg:contents">
              <div className="bg-[#D1E7FF] absolute top-1/2 p-3 right-10 rounded-full border-2 border-white">
                <BsBoxSeam className="text-2xl "></BsBoxSeam>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md relative">
          <img className="w-full rounded-md rounded-b-none" src={img3} alt="" />
          <div className="flex justify-around bg-white py-4">
            <p className="text-base font-medium">
              Fast, reliable shipping <br /> by ocean or air
            </p>
            <div>
              <div className="hidden lg:contents">
              <div className="bg-[#D1E7FF] absolute top-1/2 p-3 right-10 rounded-full border-2 border-white">
                <BiPaperPlane className="text-2xl "></BiPaperPlane>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md relative">
          <img className="w-full rounded-md rounded-b-none" src={img4} alt="" />
          <div className="flex justify-around bg-white py-4">
            <p className="text-base font-medium">
              Product monitoring <br />
              and inspection
            </p>
            <div className="">
              <div className="hidden lg:contents">
              <div className="absolute top-1/2 bg-[#D1E7FF] p-3 right-10 rounded-full border-2 border-white">
                <AiOutlineSafetyCertificate className="text-2xl "></AiOutlineSafetyCertificate>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraService;
