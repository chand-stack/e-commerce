import { FaBars,FaEarthAmericas } from 'react-icons/fa6';
import { BiSolidUser,BiSolidMessageDetail,BiSolidBox } from 'react-icons/bi';
import { BsFillSuitHeartFill,BsHeadset,BsFillBuildingFill } from 'react-icons/bs';
import { AiOutlineHome,AiOutlineBars,AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart,FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/Group 2.svg'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="lg:hidden">
     
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-transparent text-black text-2xl border-none"><FaBars></FaBars></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu w-80 min-h-full bg-base-200 font-semibold text-black pb-14">
      {/* Sidebar content here */}
      <div className='bg-gray-200 p-4'>
        <FaUserCircle className='text-5xl text-gray-300 my-3'></FaUserCircle>
        <Link>Sign in</Link> | <Link>Register</Link>
      </div>
      <li className='p-2'><Link><AiOutlineHome className='text-gray-500 text-xl'></AiOutlineHome>Home</Link></li>
      <li className='p-2'><Link><AiOutlineBars className='text-gray-500 text-xl'></AiOutlineBars>Categories</Link></li>
      <li className='p-2'><Link><AiOutlineHeart className='text-gray-500 text-xl'></AiOutlineHeart>Favorites</Link></li>
      <li className='border-b p-2'><Link><BiSolidBox className='text-gray-500 text-xl'></BiSolidBox>My orders</Link></li>
      <li className='p-2'><Link><FaEarthAmericas className='text-gray-500 text-xl'></FaEarthAmericas>English | USD</Link></li>
      <li className='p-2'><Link><BsHeadset className='text-gray-500 text-xl'></BsHeadset>Contact us</Link></li>
      <li className='p-2 border-b'><Link><BsFillBuildingFill className='text-gray-500 text-xl'></BsFillBuildingFill>About</Link></li>

      <li className='p-2'><Link>User agreement</Link></li>
      <li className='p-2'><Link>Partnership</Link></li>
      <li className='p-2'><Link>Privacy policy</Link></li>
      
    </ul>
  </div>
</div>
    </div>
    <div className="flex items-center gap-1">
        <img className='bg-[#0D6EFD] h-10 shadow-lg shadow-blue-300 md:h-14 p-3 rounded-lg' src={logo} alt="" />
        <p className='text-3xl md:text-4xl text-[#8CB7F5] font-bold'>Brand</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex items-center">
  <input type="text" placeholder="Search" className="rounded-lg px-3 border-r-0 rounded-r-none h-[60px]  border-[#0D6EFD] border-2 min-w-[420px] input-primary w-full " />
  <div className='border-[#0D6EFD] border-2  h-[60px] '>
  <select className="select  w-36  h-full">
  <option defaultChecked>All category</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>
  </div>
  <button className='btn bg-[#0D6EFD] text-white border-none h-[60px] rounded-lg rounded-l-none'>Search</button>
  </div>
  <div className="navbar-end">

<div className='hidden lg:flex gap-3 justify-between text-xl text-gray-500'>
    <Link>
    <BiSolidUser className='mx-auto'></BiSolidUser>
    <p>Profile</p>
    </Link>
    <Link>
    <BiSolidMessageDetail className='mx-auto'></BiSolidMessageDetail>
    <p>Message</p>
    </Link>
    <Link>
    <BsFillSuitHeartFill className='mx-auto'></BsFillSuitHeartFill>
    <p>Orders</p>
    </Link>
    <Link>
    <FaShoppingCart className='mx-auto'></FaShoppingCart>
    <p>My Cart</p>
    </Link>
</div>


    
  </div>
</div>
        </div>
    );
};

export default Nav;