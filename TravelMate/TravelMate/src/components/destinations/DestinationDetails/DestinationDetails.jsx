import { useParams, Link } from "react-router-dom";
import DestinationData from "../DestinationData";
import "./DestinationDetails.css";

const DestinationDetails = () => {
  const { id } = useParams();

  const destination = DestinationData.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="destination-details-not-found">
        <h1>Destination Not Found</h1>

        <Link to="/destinations">
          ← Back to Destinations
        </Link>
      </main>
    );
  }

  return (
    <main className="destination-details-page">
      <div className="destination-details-container">

        <Link
          to="/destinations"
          className="destination-back-link"
        >
          ← Back to Destinations
        </Link>

        <div className="destination-details-card">

          <div className="destination-details-image">
            <img
              src={destination.image}
              alt={destination.name}
            />
          </div>

          <div className="destination-details-content">

            <span className="destination-details-country">
              {destination.country}
            </span>

            <h1>{destination.name}</h1>

            <p className="destination-details-description">
              {destination.description}
            </p>

            <div className="destination-details-info">

              <div>
                <span>Duration</span>
                <strong>{destination.duration}</strong>
              </div>

              <div>
                <span>Rating</span>
                <strong>⭐ {destination.rating}</strong>
              </div>

              <div>
                <span>Starting From</span>
                <strong>${destination.price}</strong>
              </div>

            </div>

            <Link
              to={`/booking/${destination.id}`}
              className="destination-book-button"
            >
              Book This Trip
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
};

export default DestinationDetails;