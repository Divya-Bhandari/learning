import "./DestinationCard.css";

const DestinationCard = ({ destination }) => {
  return (
    <article className="destination-card">
      <div className="destination-card-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-country">
          {destination.country}
        </span>
      </div>

      <div className="destination-card-content">
        <div className="destination-card-title">
          <h3>{destination.name}</h3>

          <span className="destination-rating">
            {"★".repeat(destination.rating)}
            <span className="rating-number">
              {destination.rating}.0
            </span>
          </span>
        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-card-info">
          <span>🕒 {destination.duration}</span>

          <span>
            From <strong>${destination.price}</strong>
          </span>
        </div>

        <button className="destination-details-btn">
          View Details
        </button>
      </div>
    </article>
  );
};

export default DestinationCard;