const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="image-container">
        <img src={destination.image} alt={destination.name} />

        <span className="price-badge">
          {destination.price}
        </span>
      </div>

      <div className="card-content">
        <h3>{destination.name}</h3>

        <p>{destination.country}</p>

        <div className="card-footer">
          <span>⭐ {destination.rating}</span>

          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;