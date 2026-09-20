import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            🌍 Discover the world with TravelMate
          </span>

          <h1>
            Your next
            <br />
            adventure starts here.
          </h1>

          <p>
            Discover amazing destinations, plan unforgettable journeys,
            and explore the world with TravelMate.
          </p>

          <div className="hero-buttons">
            <Link to="/destinations" className="hero-primary-button">
              Explore Destinations
            </Link>

            <Link to="/about" className="hero-secondary-button">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
            alt="Beautiful tropical beach"
          />

          <div className="hero-image-card">
            <span>✈️</span>
            <div>
              <strong>Start exploring</strong>
              <small>Beautiful places await</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;