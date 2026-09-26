import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import DestinationCard from "../DestinationCard/DestinationCard";
import { destinations } from "../DestinationData";
import "./DestinationGrid.css";

const DestinationGrid = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        destination.country
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="destination-grid-section">
      <div className="destination-grid-container">
        <div className="destination-grid-header">
          <div>
            <span>Popular places</span>
            <h2>Explore Destinations</h2>
          </div>

          <p>
            Discover places worth visiting and start planning your
            next adventure.
          </p>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="destination-grid">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="destination-empty">
            <h3>No destinations found</h3>
            <p>
              Try searching for another destination or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationGrid;