import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">🌍 Explore the World</span>

          <h1>Discover Your Next Adventure</h1>

          <p>
            TravelMate helps you discover beautiful destinations, book
            unforgettable trips, and create memories that last forever.
          </p>

          <div className="hero-buttons">
            <Link to="/destinations" className="hero-primary-button">
              Explore Now
            </Link>

            <Link to="/about" className="hero-secondary-button">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
            alt="Beautiful tropical travel destination"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;