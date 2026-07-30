const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">

      <img
        src={tour.image}
        alt={tour.title}
      />

      <div className="tour-info">

        <h3>{tour.title}</h3>

        <p>📍 {tour.location}</p>

        <div className="tour-details">
          <span>⭐ {tour.rating}</span>
          <span>{tour.duration}</span>
        </div>


        <div className="tour-bottom">

          <strong>
            {tour.price}
          </strong>

          <button>
            View Details
          </button>

        </div>

      </div>

    </div>
  );
};

export default TourCard;