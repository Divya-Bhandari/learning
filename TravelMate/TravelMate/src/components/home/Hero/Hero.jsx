import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <p className="hero-tag">
          🌍 Explore the World
        </p>

        <h1>
          Discover Your Next
          <span> Adventure</span>
        </h1>

        <p className="hero-description">
          TravelMate helps you discover beautiful destinations,
          book unforgettable trips, and create memories that last forever.
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">
            Explore Now
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>
      </div>


      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
          alt="Travel"
        />
      </div>

    </section>
  );
};

export default Hero;