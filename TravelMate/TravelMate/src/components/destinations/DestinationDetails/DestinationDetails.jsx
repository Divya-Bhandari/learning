import { Link, useParams } from "react-router-dom";
import { destinations } from "../DestinationData";
import "./DestinationDetails.css";

const DestinationDetails = () => {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => String(item.id) === String(id)
  );

  if (!destination) {
    return (
      <main className="destination-details-page">
        <div className="destination-details-not-found">
          <h1>Destination Not Found</h1>
          <p>
            Sorry, we couldn't find the destination you're looking for.
          </p>

          <Link to="/destinations">
            Back to Destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="destination-details-page">
      {/* Hero Image */}

      <section className="destination-details-hero">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <div className="destination-details-overlay">
          <div className="destination-details-hero-content">
            <span>{destination.category}</span>

            <h1>{destination.name}</h1>

            <p>📍 {destination.country}</p>
          </div>
        </div>
      </section>

      {/* Details */}

      <section className="destination-details-content">
        <div className="destination-details-container">
          <div className="destination-details-main">
            <span className="destination-details-label">
              About the destination
            </span>

            <h2>Explore {destination.name}</h2>

            <p className="destination-details-description">
              {destination.description ||
                `Discover the beauty, culture, and unforgettable experiences of ${destination.name}. Plan your journey and explore everything this destination has to offer.`}
            </p>

            <div className="destination-details-info">
              <div>
                <span>Destination</span>
                <strong>{destination.name}</strong>
              </div>

              <div>
                <span>Country</span>
                <strong>{destination.country}</strong>
              </div>

              <div>
                <span>Category</span>
                <strong>{destination.category}</strong>
              </div>

              <div>
                <span>Available Tours</span>
                <strong>{destination.tours || 0}</strong>
              </div>
            </div>
          </div>

          {/* Sidebar */}

          <aside className="destination-details-sidebar">
            <h3>Plan Your Trip</h3>

            <p>
              Ready to explore {destination.name}? Discover tours,
              experiences, and travel options for your journey.
            </p>

            <Link
              to={`/booking/${destination.id}`}
              className="destination-details-button"
            >
              Book a Tour
            </Link>

            <Link
              to="/destinations"
              className="destination-details-back"
            >
              ← Back to Destinations
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default DestinationDetails;