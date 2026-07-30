import "./FeaturedTours.css";
import TourCard from "./TourCard";
import tourData from "./tourData";

const FeaturedTours = () => {
  return (
    <section className="featured-section">

      <div className="section-title">
        <h2>Featured Tours</h2>
        <p>
          Explore our most popular travel experiences
        </p>
      </div>


      <div className="tour-grid">

        {tourData.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedTours;