import BottomBar from "../components/BottomBar";
import { IoHammerOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex items-center h-screen w-full">
    <div className="flex flex-col w-full items-center py-4">
      <div className="flex justify-between w-full mb-12">
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
       
      </div>
      <div className="flex justify-between w-full mb-24">
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
              <IoHammerOutline />
            </button>
            <p>Renovasi</p>
          </div>
        
      </div>
    </div>
    <BottomBar />
  </div>
  );
};

export default Home;
