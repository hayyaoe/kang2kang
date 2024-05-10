import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const OrderDetail = () => {
  return (
    <div>
      <nav className="w-full grid grid-cols-4 place-content-around">
        <IoArrowBack className="text-2xl" />
        <h1 className="col-span-2 font-semibold">Input Order Detail</h1>
        <IoArrowBack className="text-transparent" />
      </nav>
      <div className="text-sm flex gap-4 mt-6">
        <div className="bg-[#FFD100] h-16 w-16 rounded-full border-2 border-black" />
        <div className="flex flex-col text-left">
          <h1 className="font-semibold truncate">Rody Firmansyah</h1>
          <h5 className="truncate">081234566</h5>
          <h5 className="truncate">Jl. Raya Gg.1 No.2</h5>
        </div>
      </div>
      <div className="border-t-2 border-black my-6"></div>
      <div className="flex flex-col gap-2 text-sm text-left">
        <h1>Please fill out your order project details</h1>
        <div>
          <h1>Category</h1>
          <h1 className="font-bold">Bebersih</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1>Project Description</h1>
          <textarea
            className="border p-2 border-slate-300 rounded-md w-full h-24 resize-none placeholder:text-xs placeholder:font-light"
            placeholder="Type your project description..."
          />
        </div>
      </div>

      <div className="fixed left-0 bottom-0 w-screen flex flex-col shadow-3xl shadow-black rounded-xl">
        <button className="bg-[#FFD100] py-2 px-4 mx-8 my-8 rounded-md border border-black flex items-center justify-between">
          <h1 className="font-bold text-sm">Rp.199.000</h1>
          <div className="flex flex-row items-center text-sm">
            <h1>Continue Payment</h1>
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
