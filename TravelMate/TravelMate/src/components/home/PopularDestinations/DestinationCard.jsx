const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">

      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="destination-info">
        <h3>{destination.name}</h3>

        <p>{destination.country}</p>

        <div className="destination-details">
          <span>⭐ {destination.rating}</span>
          <span>{destination.price}</span>
        </div>
      </div>

    </div>
  );
};

export default DestinationCard;