import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("travelmateLoggedIn") === "true"
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("travelmateUser")) || null
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn =
        localStorage.getItem("travelmateLoggedIn") === "true";

      const savedUser =
        JSON.parse(localStorage.getItem("travelmateUser")) || null;

      setIsLoggedIn(loggedIn);
      setUser(savedUser);
    };

    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("travelmateLoggedIn");

    setIsLoggedIn(false);
    setUser(null);
    setMenuOpen(false);

    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          TravelMate
        </Link>
      </div>

      <button
        type="button"
        className="navbar-menu-button"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className={`navbar-content ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/destinations" onClick={closeMenu}>
              Destinations
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="/my-bookings" onClick={closeMenu}>
                My Bookings
              </Link>
            </li>
          )}

          <li>
            <Link to="/contact" onClick={closeMenu}>
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
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="register-btn"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;