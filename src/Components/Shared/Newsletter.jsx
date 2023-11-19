
const Newsletter = () => {
    return (
        <div className="bg-[#EFF2F4] w-full">
        <div className="space-y-5 py-10 mt-9">
            <h1 className="text-center text-xl font-semibold">Subscribe on our newsletter</h1>
            <p className="text-center text-base">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex justify-center gap-2 px-1 md:px-0">
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <button className="btn text-white bg-[#127FFF]">Subscribe</button>
            </div>
            
        </div>
        </div>
    );
};

export default Newsletter;