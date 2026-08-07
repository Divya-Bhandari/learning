import { useState } from "react";

import DestinationHero from "../components/destinations/DestinationHero/DestinationHero";
import DestinationFilter from "../components/destinations/DestinationFilter/DestinationFilter";
import DestinationGrid from "../components/destinations/DestinationGrid/DestinationGrid";
import Pagination from "../components/destinations/Pagination/Pagination";

import DestinationData from "../components/destinations/DestinationData";

const Destinations = () => {
  const [filters, setFilters] = useState({
    country: "All Countries",
    price: "Any Budget",
    duration: "Any Duration",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const destinationsPerPage = 6;

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

    const days = parseInt(destination.duration);

    let durationMatch = true;

    if (filters.duration === "1 - 5 Days") {
      durationMatch = days <= 5;
    } else if (filters.duration === "6 - 7 Days") {
      durationMatch = days >= 6 && days <= 7;
    } else if (filters.duration === "8+ Days") {
      durationMatch = days >= 8;
    }

    return countryMatch && priceMatch && durationMatch;
  });

  const totalPages = Math.ceil(
    filteredDestinations.length / destinationsPerPage
  );

  const startIndex = (currentPage - 1) * destinationsPerPage;

  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + destinationsPerPage
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <>
      <DestinationHero />

      <DestinationFilter
        onFilterChange={handleFilterChange}
      />

      <DestinationGrid
        destinations={currentDestinations}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Destinations;