import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          TravelMate
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/destinations">Destinations</Link>
        </li>

        <li>
          <Link to="/my-bookings">My Bookings</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
};

export default Navbar;