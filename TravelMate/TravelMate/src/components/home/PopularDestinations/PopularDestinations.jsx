import "./PopularDestinations.css";
import destinationData from "./destinationData";
import DestinationCard from "./DestinationCard";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">

      <SectionHeader
        tag="Destinations"
        title="Popular Destinations"
        subtitle="Explore the world's most beautiful places"
      />

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