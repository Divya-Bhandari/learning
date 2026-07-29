const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} />

      <div className="tour-content">
        <h3>{tour.title}</h3>

        <p>{tour.location}</p>

        <div className="tour-info">
          <span>⏳ {tour.duration}</span>
          <span>⭐ {tour.rating}</span>
        </div>

        <div className="tour-footer">
          <h4>{tour.price}</h4>

          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;