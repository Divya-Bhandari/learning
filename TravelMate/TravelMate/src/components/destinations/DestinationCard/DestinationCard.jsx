import { Link } from "react-router-dom";
import "./DestinationCard.css";

const DestinationCard = ({ destination }) => {
  return (
    <article className="destination-card">
      <div className="destination-card-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-card-category">
          {destination.category}
        </span>
      </div>

      <div className="destination-card-content">
        <div className="destination-card-location">
          📍 {destination.country}
        </div>

        <h3>{destination.name}</h3>

        <p>
          {destination.description ||
            "Discover beautiful places and unforgettable travel experiences."}
        </p>

        <div className="destination-card-footer">
          <span>
            {destination.tours || 0} Tours
          </span>

          <Link to={`/destinations/${destination.id}`}>
            Explore →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;