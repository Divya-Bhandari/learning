import "./DestinationCard.css";

const DestinationCard = ({ destination }) => {
  return (
    <article className="destination-card">
      <div className="destination-card-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-card-country">
          {destination.country}
        </span>
      </div>

      <div className="destination-card-content">
        <div className="destination-card-title">
          <h3>{destination.name}</h3>

          <div className="destination-card-rating">
            ⭐ {destination.rating}
          </div>
        </div>

        <p className="destination-card-description">
          {destination.description}
        </p>

        <div className="destination-card-info">
          <span>🕒 {destination.duration}</span>
          <strong>${destination.price}</strong>
        </div>

        <button className="destination-card-button">
          View Details
        </button>
      </div>
    </article>
  );
};

export default DestinationCard;