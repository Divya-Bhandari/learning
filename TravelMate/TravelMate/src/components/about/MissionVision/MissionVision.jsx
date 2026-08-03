import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-container">

        <div className="mission-card">
          <div className="mission-icon">🌍</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to make travel simple, affordable,
            and memorable by helping people discover amazing
            destinations and book with confidence.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">🚀</div>

          <h2>Our Vision</h2>

          <p>
            Our vision is to become the most trusted travel
            platform, inspiring millions of travelers to
            explore the world and create unforgettable memories.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;