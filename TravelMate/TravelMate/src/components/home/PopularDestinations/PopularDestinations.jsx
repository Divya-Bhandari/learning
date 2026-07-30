import "./PopularDestinations.css";
import destinationData from "./destinationData";
import DestinationCard from "./DestinationCard";

const PopularDestinations = () => {
  return (
    <section className="popular-section">

      <div className="section-title">
        <h2>Popular Destinations</h2>
        <p>Explore the world's most beautiful places</p>
      </div>

      <div className="destination-grid">
        {destinationData.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>

    </section>
  );
};

export default PopularDestinations;