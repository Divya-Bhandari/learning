import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import navLinks from "./navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <h2>TravelMate</h2>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}

          <NavLink to="/login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>

          <NavLink to="/register" onClick={() => setIsOpen(false)}>
            Register
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;