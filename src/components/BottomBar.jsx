import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="fixed left-0 bottom-0 w-screen bg-[#FFD100] p-5 rounded-t-lg border-t-2 border-r-2 border-l-2 border-black ">
      <nav>
        <ul className="w-full grid grid-cols-3 place-content-evenly justify-items-center text-2xl">
          <li>
            <Link to="/" className="">
              <FiHome />
            </Link>
          </li>
          <li>
            <Link to="/history" className="">
              <LuHistory />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="">
              <FaRegUser />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomBar;
