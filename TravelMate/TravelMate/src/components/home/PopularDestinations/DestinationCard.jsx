const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="card-content">
        <h3>{destination.name}</h3>

        <p>{destination.country}</p>

        <div className="card-footer">
          <span>⭐ {destination.rating}</span>

          <span>{destination.price}</span>
        </div>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default DestinationCard;