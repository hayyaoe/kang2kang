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
            <Link to="/home" className="">
              Profile
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
