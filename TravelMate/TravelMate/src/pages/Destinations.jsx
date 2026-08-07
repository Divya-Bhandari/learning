import { useState } from "react";

import DestinationHero from "../components/destinations/DestinationHero/DestinationHero";
import DestinationFilter from "../components/destinations/DestinationFilter/DestinationFilter";
import DestinationGrid from "../components/destinations/DestinationGrid/DestinationGrid";

import DestinationData from "../components/destinations/DestinationData";

const Destinations = () => {
  const [filters, setFilters] = useState({
    country: "All Countries",
    price: "Any Budget",
    duration: "Any Duration",
  });

  const filteredDestinations = DestinationData.filter((destination) => {
    const countryMatch =
      filters.country === "All Countries" ||
      destination.country === filters.country;

    let priceMatch = true;

    if (filters.price === "Under $700") {
      priceMatch = destination.price < 700;
    } else if (filters.price === "$700 - $1000") {
      priceMatch =
        destination.price >= 700 && destination.price <= 1000;
    } else if (filters.price === "Above $1000") {
      priceMatch = destination.price > 1000;
    }

    let durationMatch = true;

    const days = parseInt(destination.duration);

    if (filters.duration === "1 - 5 Days") {
      durationMatch = days <= 5;
    } else if (filters.duration === "6 - 7 Days") {
      durationMatch = days >= 6 && days <= 7;
    } else if (filters.duration === "8+ Days") {
      durationMatch = days >= 8;
    }

    return countryMatch && priceMatch && durationMatch;
  });

  return (
    <>
      <DestinationHero />

      <DestinationFilter
        onFilterChange={setFilters}
      />

      <DestinationGrid
        destinations={filteredDestinations}
      />
    </>
  );
};

export default Destinations;