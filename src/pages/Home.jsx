import BottomBar from "../components/BottomBar";
import { IoHammerOutline } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiPencilRuler } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { MdPlumbing } from "react-icons/md";
import { FaVest } from "react-icons/fa";
import { MdRoofing } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="relative">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9pTMQuBPPCLulSFOEZllB6XvELZG7L-Til7e57capA&s" alt="Banner Perbaikan" className="absolute top-0 left-0 w-full h-48 object-cover rounded mb-16" />
      <p className="absolute top-48 font-sans text-2xl font-semibold left-0">Kategori Perbaikan</p>
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
            <FaHelmetSafety />
            </button>
            <p>Renovasi</p>
          </div>
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <GiPencilRuler />
            </button>
            <p>Renovasi</p>
          </div>
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <FaPaintRoller />
            </button>
            <p>Renovasi</p>
          </div>
       
      </div>
      <div className="flex justify-between w-full mb-24">
      <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <MdElectricalServices />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <MdPlumbing />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <MdRoofing />
            </button>
            <p>Renovasi</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-md bg-[#ffd200] text-black flex items-center justify-center text-xl mb-2">
            <FaVest />
            </button>
            <p>Renovasi</p>
          </div>
      </div>
      <p className="absolute top-[505px] font-sans text-2xl font-semibold left-0">Tutorial Pesan Tukang</p>
    </div>
    <BottomBar />
  </div>
      </div>
    </div>
    
  );
};

export default Home;
