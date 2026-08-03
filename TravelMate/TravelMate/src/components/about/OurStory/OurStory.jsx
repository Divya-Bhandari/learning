import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-container">

        <div className="story-text">
          <span>Our Story</span>

          <h2>Helping People Explore the World Since Day One</h2>

          <p>
            TravelMate was created with one goal—to make travel planning
            simple, enjoyable, and accessible for everyone.
          </p>

          <p>
            From peaceful mountains to tropical beaches and vibrant cities,
            we help travelers discover destinations that create unforgettable
            memories.
          </p>
        </div>

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000"
            alt="Travel"
          />
        </div>

      </div>
    </section>
  );
};

export default OurStory;