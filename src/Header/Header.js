import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrap">
        <div className="left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/now">Weather Now</Link>
            </li>
            <li>
              <Link to="/week">Weather 3 days</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
