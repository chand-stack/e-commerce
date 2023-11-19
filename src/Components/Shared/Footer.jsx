import logo from '../../assets/Group 2.svg'
import img from '../../assets/Group.svg'
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="bg-white w-full">
            <footer className="footer p-10 bg-white text-base-content container mx-auto">
  <aside>
  <div className="flex items-center gap-1">
        <img className='bg-[#0D6EFD] h-10 shadow-lg shadow-blue-300 md:h-14 p-3 rounded-lg' src={logo} alt="" />
        <p className='text-3xl md:text-4xl text-[#8CB7F5] font-bold'>Brand</p>
    </div>
    <p>Best information about the company <br /> gies here but now lorem ipsum is</p>
    <div className='flex items-center gap-1'>
        <FaFacebook className='text-2xl text-gray-400'></FaFacebook>
        <AiFillTwitterCircle className='text-2xl text-gray-400'></AiFillTwitterCircle>
        <FaLinkedin className='text-2xl text-gray-400 rounded-full'></FaLinkedin>
        <FaInstagramSquare className='text-2xl text-gray-400 rounded-full'></FaInstagramSquare>
        <FaYoutubeSquare className='text-2xl text-gray-400 rounded-full'></FaYoutubeSquare>
    </div>
  </aside> 
  <nav>
    <header className=" font-medium text-black">About</header> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Find store</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">Blogs</a>
  </nav> 
  <nav>
    <header className="font-medium text-black">Partnership</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Find store</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">Blogs</a>
  </nav> 
  <nav>
    <header className="font-medium text-black">Information</header> 
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Money Refund</a>
    <a className="link link-hover">Shipping</a>
    <a className="link link-hover">Contact us</a>
  </nav>
  <nav>
    <header className="font-medium text-black">For users</header> 
    <a className="link link-hover">Login</a>
    <a className="link link-hover">Register</a>
    <a className="link link-hover">My Orders</a>
    <a className="link link-hover">Settings</a>
  </nav>
  <nav>
    <header className="font-medium text-black">Get App</header> 
    <img src={img} alt="" />
    <img src={img} alt="" />
  </nav>
</footer>
        </div>
    );
};

export default Footer;