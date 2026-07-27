import "./PopularDestinations.css";

import destinationData from "./destinationData";
import DestinationCard from "./DestinationCard";

const PopularDestinations = () => {
  return (
    <section className="popular">
      <div className="container">

        <h2>Popular Destinations</h2>

        <p>
          Discover amazing places around the world.
        </p>

        <div className="destination-grid">

          {destinationData.map((destination) => (
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

export default PopularDestinations;