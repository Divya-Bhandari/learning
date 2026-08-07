import "./DestinationGrid.css";
import DestinationData from "../DestinationData";

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
            <div
              className="destination-test-card"
              key={destination.id}
            >
              <img
                src={destination.image}
                alt={destination.name}
              />

              <h3>{destination.name}</h3>

              <p>{destination.country}</p>

              <p>{destination.description}</p>

              <strong>${destination.price}</strong>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DestinationGrid;
