import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("travelmateLoggedIn") === "true"
  );

  const user =
    JSON.parse(
      localStorage.getItem("travelmateUser")
    ) || null;

  const handleLogout = () => {
    localStorage.removeItem("travelmateLoggedIn");

    setIsLoggedIn(false);

    navigate("/");
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

        {isLoggedIn && (
          <li>
            <Link to="/my-bookings">
              My Bookings
            </Link>
          </li>
        )}

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>

      <div className="navbar-auth">

        {isLoggedIn ? (
          <>
            <span className="navbar-user">
              Hi, {user?.name || "Traveler"}
            </span>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;