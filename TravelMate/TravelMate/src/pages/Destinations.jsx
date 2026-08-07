import DestinationHero from "../components/destinations/DestinationHero/DestinationHero";
import DestinationFilter from "../components/destinations/DestinationFilter/DestinationFilter";
import DestinationGrid from "../components/destinations/DestinationGrid/DestinationGrid";

const Destinations = () => {
  return (
    <>
      <DestinationHero />

      <DestinationFilter />

      <DestinationGrid />
    </>
  );
};

export default Destinations;