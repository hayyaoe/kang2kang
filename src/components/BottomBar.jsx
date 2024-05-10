import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              <FiHome />
            </Link>
          </li>
          <li>
            <Link to="/home" className="">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomBar;
