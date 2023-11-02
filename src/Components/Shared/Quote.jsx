const Quote = () => {
  return (
    <div>
      <div className="text-black bg-white space-y-4 py-6 px-5 my-10 mx-5 rounded-lg">
        <h1 className="text-xl font-semibold">Send quote to suppliers</h1>
        <p className="text-base border p-1 rounded-lg">What item you need?</p>
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
        <button className="btn bg-[#127FFF] text-white">Send inquiry</button>
      </div>
    </div>
  );
};

export default Quote;
