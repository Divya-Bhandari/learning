import "./DestinationGrid.css";
import DestinationCard from "../DestinationCard/DestinationCard";

const DestinationGrid = ({ destinations }) => {
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

        {destinations.length > 0 ? (
          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="no-destinations">
            <h3>No destinations found</h3>
            <p>
              Try changing your country, price, or duration filters.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default DestinationGrid;