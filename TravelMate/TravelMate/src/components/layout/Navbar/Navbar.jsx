import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const getUser = () => {
    try {
      return JSON.parse(localStorage.getItem("travelmateUser")) || null;
    } catch {
      return null;
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("travelmateLoggedIn") === "true"
  );

  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn =
        localStorage.getItem("travelmateLoggedIn") === "true";

      setIsLoggedIn(loggedIn);
      setUser(getUser());
    };

    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("travelmateLoggedIn");
    localStorage.removeItem("travelmateUser");

    setIsLoggedIn(false);
    setUser(null);

    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          TravelMate
        </Link>
      </div>

      {/* Navigation Links */}
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

      {/* Authentication */}
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