import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              TravelMate
            </Link>

            <p>
              Discover beautiful destinations, plan memorable journeys,
              and explore the world with TravelMate.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/destinations">Popular Destinations</Link>
            <Link to="/destinations">Featured Tours</Link>
            <Link to="/about">Why TravelMate</Link>
            <Link to="/contact">Travel Support</Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p>📍 Nepal</p>
            <p>📧 hello@travelmate.com</p>
            <p>📞 +977 9800000000</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;