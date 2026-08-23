import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("travelmateLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("travelmateLoggedIn");
    navigate("/login");
  };

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
          <Link to="/destinations">
            Destinations
          </Link>
        </li>

        <li>
          <Link to="/my-bookings">
            My Bookings
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>

      {isLoggedIn ? (
        <button
          className="login-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}

    </nav>
  );
};

export default Navbar;