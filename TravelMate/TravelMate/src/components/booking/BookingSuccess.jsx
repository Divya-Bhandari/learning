import { Link } from "react-router-dom";

import "./BookingSuccess.css";

const BookingSuccess = () => {
  return (
    <main className="booking-success-page">

      <div className="booking-success-card">

        <div className="booking-success-icon">
          ✓
        </div>

        <span className="booking-success-label">
          TravelMate
        </span>

        <h1>
          Booking Confirmed!
        </h1>

        <p>
          Your booking has been successfully confirmed.
          Get ready for your next adventure!
        </p>

        <div className="booking-success-actions">

          <Link
            to="/my-bookings"
            className="booking-success-primary"
          >
            View My Bookings
          </Link>

          <Link
            to="/destinations"
            className="booking-success-secondary"
          >
            Explore More
          </Link>

        </div>

      </div>

    </main>
  );
};

export default BookingSuccess;