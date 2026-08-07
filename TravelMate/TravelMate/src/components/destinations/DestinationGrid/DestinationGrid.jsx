import "./DestinationGrid.css";
import DestinationData from "../DestinationData";
import DestinationCard from "../DestinationCard/DestinationCard";

const DestinationGrid = () => {
  return (
    <section className="destination-grid-section">
      <div className="destination-grid-container">

        <div className="destination-grid-heading">
          <span>Discover More</span>

          <h2>Popular Destinations</h2>

          <p>
            Explore our handpicked destinations and find your next
            unforgettable adventure.
          </p>
        </div>

        <div className="destination-grid">
          {DestinationData.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DestinationGrid;