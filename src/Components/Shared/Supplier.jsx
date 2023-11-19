import flag1 from '../../assets/flags/AE@2x.jpg'
import flag2 from '../../assets/flags/AU@2x.jpg'
import flag3 from '../../assets/flags/CN@2x.jpg'
import flag4 from '../../assets/flags/DK@2x.jpg'
import flag5 from '../../assets/flags/FR@2x.jpg'
import flag6 from '../../assets/flags/GB@2x.jpg'
import flag7 from '../../assets/flags/IT@2x.jpg'
import flag8 from '../../assets/flags/RU@2x.jpg'
import flag9 from '../../assets/flags/US@2x.jpg'

const Supplier = () => {
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-semibold text-black p-2 mt-3 lg:p-0 lg:my-8">
            Suppliers by region
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
            <div className='flex items-center gap-2'>
                <img src={flag1} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag2} alt="" />
                <div>
                    <p>Australia</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag3} alt="" />
                <div>
                    <p>China</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag4} alt="" />
                <div>
                    <p>Denmark</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag5} alt="" />
                <div>
                    <p>France</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag6} alt="" />
                <div>
                    <p>Great Britain</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag7} alt="" />
                <div>
                    <p>Italy</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag8} alt="" />
                <div>
                    <p>Russia</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag9} alt="" />
                <div>
                    <p>United States</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag1} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <p className='text-xs text-gray-500'>shopname.ae</p>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Supplier;