import { Link } from "react-router-dom";

import "./BookingSuccess.css";

const BookingSuccess = () => {
  const bookings =
    JSON.parse(localStorage.getItem("travelmateBookings")) || [];

  const booking = bookings.length
    ? bookings[bookings.length - 1]
    : null;

  if (!booking) {
    return (
      <main className="booking-success-page">
        <div className="booking-success-container">
          <div className="booking-success-card">
            <div className="booking-success-icon">!</div>

            <h1>No Booking Found</h1>

            <p>
              We couldn't find a recent booking.
              Please choose a destination and try again.
            </p>

            <Link
              to="/destinations"
              className="booking-success-button"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-success-page">
      <div className="booking-success-container">
        <div className="booking-success-card">
          <div className="booking-success-icon">
            ✓
          </div>

          <span className="booking-success-label">
            Booking Confirmed
          </span>

          <h1>Your trip is booked!</h1>

          <p className="booking-success-message">
            Thank you, {booking.name}. Your booking for{" "}
            <strong>{booking.destination}</strong> has
            been successfully confirmed.
          </p>

          <div className="booking-success-details">
            <div className="success-detail-row">
              <span>Destination</span>
              <strong>
                {booking.destination}
              </strong>
            </div>

            <div className="success-detail-row">
              <span>Country</span>
              <strong>
                {booking.country}
              </strong>
            </div>

            <div className="success-detail-row">
              <span>Travel Date</span>
              <strong>
                {booking.date}
              </strong>
            </div>

            <div className="success-detail-row">
              <span>Travelers</span>
              <strong>
                {booking.travelers}
              </strong>
            </div>

            <div className="success-detail-row">
              <span>Duration</span>
              <strong>
                {booking.duration}
              </strong>
            </div>

            <div className="success-detail-row success-total">
              <span>Total</span>
              <strong>
                ${booking.total.toLocaleString()}
              </strong>
            </div>
          </div>

          <div className="booking-success-actions">
            <Link
              to="/my-bookings"
              className="booking-success-button"
            >
              View My Bookings
            </Link>

            <Link
              to="/destinations"
              className="booking-success-secondary"
            >
              Explore More Destinations
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingSuccess;