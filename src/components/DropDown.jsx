import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      {isOpen && (
        <div className="dropdown-menu top-0 absolute flex flex-col text-left p-2 bg-white shadow-2xl rounded-md w-full">
          <a
            className="border-b py-1 "
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            GoPay
          </a>
          <a
            className="border-b py-1"
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            BCA Virtual Account
          </a>
          <a className="py-1" onClick={() => setIsOpen(!isOpen)} href="#">
            OVO
          </a>
        </div>
      )}
      <div className="flex flex-row items-center justify-between text-sm border border-slate-300 mx-8 p-2 mt-4 rounded-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 justify-between px-2"
        >
          <div className="flex items-center gap-2">
            <IoWalletOutline />
            <h1>Choose payment method</h1>
          </div>

          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
