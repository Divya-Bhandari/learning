import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            TravelMate
          </Link>

          <p>
            Discover beautiful destinations, plan your
            journey, and create unforgettable memories.
          </p>

        </div>

        <div className="footer-links">

          <div className="footer-column">

            <h3>Explore</h3>

            <Link to="/">Home</Link>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/about">
              About
            </Link>

          </div>

          <div className="footer-column">

            <h3>Support</h3>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/my-bookings">
              My Bookings
            </Link>

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} TravelMate.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;