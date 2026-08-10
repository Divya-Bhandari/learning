import { useParams, Link } from "react-router-dom";
import DestinationData from "../components/destinations/DestinationData";
import "./DestinationDetails.css";

const DestinationDetails = () => {
  const { id } = useParams();

  const destination = DestinationData.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="destination-not-found">
        <h1>Destination Not Found</h1>
        <p>
          Sorry, we couldn't find the destination you're looking for.
        </p>

        <Link to="/destinations">
          ← Back to Destinations
        </Link>
      </main>
    );
  }

  return (
    <main className="destination-details">
      <section className="destination-details-hero">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <div className="destination-details-overlay">
          <span>{destination.country}</span>
          <h1>{destination.name}</h1>
          <p>⭐ {destination.rating} / 5</p>
        </div>
      </section>

      <section className="destination-details-content">
        <div className="destination-details-main">
          <span className="details-label">
            Explore Your Next Adventure
          </span>

          <h2>Discover {destination.name}</h2>

          <p className="details-description">
            {destination.description}
          </p>

          <div className="details-info-grid">
            <div className="details-info-card">
              <span>📍</span>
              <div>
                <small>Destination</small>
                <strong>{destination.country}</strong>
              </div>
            </div>

            <div className="details-info-card">
              <span>🕒</span>
              <div>
                <small>Duration</small>
                <strong>{destination.duration}</strong>
              </div>
            </div>

            <div className="details-info-card">
              <span>⭐</span>
              <div>
                <small>Rating</small>
                <strong>{destination.rating} / 5</strong>
              </div>
            </div>
          </div>
        </div>

        <aside className="destination-booking-card">
          <span>Starting From</span>

          <h3>${destination.price}</h3>

          <p>per person</p>

          <button>
            Book This Tour
          </button>

          <Link to="/destinations">
            ← Back to Destinations
          </Link>
        </aside>
      </section>
    </main>
  );
};

export default DestinationDetails;