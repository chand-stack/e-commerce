
const Newsletter = () => {
    return (
        <div className="space-y-5 my-10">
            <h1 className="text-center text-xl font-semibold">Subscribe on our newsletter</h1>
            <p className="text-center text-base">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex justify-center gap-2 px-1 md:px-0">
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <button className="btn text-white bg-[#127FFF]">Subscribe</button>
            </div>
            
        </div>
    );
};

export default Newsletter;