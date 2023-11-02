import { HiBars4 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
const Tabs = () => {
    return (
        <>
        <div className='hidden lg:flex justify-between py-3 bg-white'>
            <div className='font-medium text-lg flex gap-4'>
                <Link className='flex gap-2 items-center'><HiBars4></HiBars4>All category
                </Link>
                <Link className='flex gap-2 items-center'>Hot offers
                </Link>
                <Link className='flex gap-2 items-center'>Gift boxes
                </Link>
                <Link className='flex gap-2 items-center'>Projects
                </Link>
                <Link className='flex gap-2 items-center'>Menu item
                </Link>
                <select className="select select-bordered text-lg select-sm border-none">
  <option selected>Help</option>
  <option><Link>Click help</Link></option>
  <option><Link>Click help</Link></option>
  <option><Link>Click help</Link></option>
</select>
            </div>

            <div className='font-medium text-lg flex gap-4'>
            <select className="select select-bordered text-lg select-sm border-none">
  <option selected>English USD</option>
  <option><Link>English USD</Link></option>
  <option><Link>English USD</Link></option>
  <option><Link>English USD</Link></option>
</select>
            <select className="select select-bordered text-lg select-sm border-none">
  <option selected>Ship to</option>
  <option><Link>China</Link></option>
  <option><Link>Australia</Link></option>
  <option><Link>Japan</Link></option>
</select>

            </div>
            
        </div>

        <div className=' absolute top-36 flex items-center py-2 gap-5 overflow-scroll w-full lg:hidden'>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>All category</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Gadgets</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Clocthes</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Accessory</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Tablets</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Phones</button></Link>
        <Link className=''><button className='btn btn-sm text-[#0D6EFD]'>Ipads</button></Link>
        <Link><button className='btn btn-sm text-[#0D6EFD]'>Ipod</button></Link>
        <Link><button className='btn btn-sm text-[#0D6EFD]'>Jackaets</button></Link>
                

        </div>

        </>
    );
};

export default Tabs;