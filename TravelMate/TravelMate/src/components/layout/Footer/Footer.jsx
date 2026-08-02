import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>TravelMate</h2>
          <p>
            Discover amazing destinations, plan unforgettable journeys,
            and explore the world with confidence.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Popular Places</h3>

          <ul>
            <li>Pokhara</li>
            <li>Bali</li>
            <li>Paris</li>
            <li>Swiss Alps</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Kathmandu, Nepal</p>
          <p>📧 info@travelmate.com</p>
          <p>📞 +977 9800000000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} TravelMate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;