import { Link } from "react-router-dom";
import banner from '../../assets/Banner-board-800x420 2.png' 

import { FaUserCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <>
        <div>

            <div className="grid lg:grid-cols-4 gap-3 border p-3 mt-28 lg:mt-5 mb-5 ">
                <div className="hidden lg:flex flex-col">
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link>Automobiles</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200  hover:duration-1000 hover:rounded-lg'><Link >Clothes and wear</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link >Home interiors</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link >Computer and tech</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link >Tools, equipments</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link>Sports and outdoor</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link >Animal and pets</Link></p>
                    <p  className=' flex-grow p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link >Machinery tools</Link></p>
                    <p  className=' p-2 hover:font-semibold hover:bg-blue-200 hover:duration-1000 hover:rounded-lg'><Link>More category</Link></p>
                </div>
                <div className="lg:col-span-2 relative">
                  <img className="w-full " src={banner} alt="" />
                  <div className="absolute top-5 md:top-10 left-5 md:left-10">
                       <h1 className="text-xl md:text-3xl md:font-medium">Latest trending</h1>
                       <h1 className="text-xl font-bold md:text-5xl md:font-bold">Electronic items</h1>
                       <button className="font-medium mt-5 btn btn-sm md:btn-md bg-white text-blue-500 md:text-black border-none">Learn more</button>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-2">
                    <div className="flex-grow bg-[#E3F0FF] p-3 space-y-3 rounded-lg">
                        <div className="flex items-center gap-2">
                        <FaUserCircle className="text-blue-200 text-6xl"></FaUserCircle>
                        <h1 className="font-medium">Hi, user <br /> let’s get stated</h1>
                        </div>
                       <div className=" flex flex-col gap-2">
                       <button className="btn bg-[#127FFF] text-white btn-sm">Join Now</button>
                        <button className="btn text-blue-500 bg-white btn-sm">Log in</button>
                       </div>
                    </div>

                    <div className=" flex-grow bg-[#F38332] font-medium p-3 text-white rounded-lg">
                      <p>Get US $10 off <br /> with a new <br /> supplier</p>
                    </div>
                    <div className="flex-grow bg-[#55BDC3] font-medium p-3 text-white rounded-lg">
                      <p>Send quotes with <br /> supplier <br /> preferences</p>
                    </div>
                </div>
            </div>
            
        </div>
        </> 
    );
};

export default Banner;