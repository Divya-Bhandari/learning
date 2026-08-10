import { useParams, Link } from "react-router-dom";
import DestinationData from "../components/destinations/DestinationData";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();

  const destination = DestinationData.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="booking-not-found">
        <h1>Destination Not Found</h1>

        <Link to="/destinations">
          ← Back to Destinations
        </Link>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="booking-container">

        <div className="booking-header">
          <span>TravelMate Booking</span>

          <h1>Book Your Trip</h1>

          <p>
            Complete the form below to start planning your
            journey to {destination.name}.
          </p>
        </div>

        <div className="booking-layout">

          <div className="booking-form-card">
            <h2>Your Information</h2>

            <form>
              <div className="booking-form-row">

                <div className="booking-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="booking-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>

              <div className="booking-form-row">

                <div className="booking-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="booking-field">
                  <label>Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                  />
                </div>

              </div>

              <div className="booking-form-row">

                <div className="booking-field">
                  <label>Travel Date</label>
                  <input type="date" />
                </div>

                <div className="booking-field">
                  <label>Payment Method</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select payment method
                    </option>
                    <option value="card">
                      Credit / Debit Card
                    </option>
                    <option value="esewa">
                      eSewa
                    </option>
                    <option value="khalti">
                      Khalti
                    </option>
                  </select>
                </div>

              </div>

              <div className="booking-field">
                <label>Special Requests</label>

                <textarea
                  rows="5"
                  placeholder="Any special requests?"
                />
              </div>

              <button
                type="submit"
                className="booking-submit-button"
              >
                Confirm Booking
              </button>
            </form>
          </div>

          <aside className="booking-summary">

            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="booking-summary-content">
              <span>Selected Destination</span>

              <h2>{destination.name}</h2>

              <p>{destination.country}</p>

              <div className="booking-summary-info">
                <div>
                  <small>Duration</small>
                  <strong>{destination.duration}</strong>
                </div>

                <div>
                  <small>Rating</small>
                  <strong>⭐ {destination.rating}</strong>
                </div>
              </div>

              <div className="booking-price">
                <span>Starting From</span>
                <strong>${destination.price}</strong>
                <small>per person</small>
              </div>

              <Link
                to={`/destinations/${destination.id}`}
                className="back-details-link"
              >
                ← Back to Details
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Booking;