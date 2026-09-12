import { Link, useNavigate, useParams } from "react-router-dom";
import "./BookingDetails.css";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookings =
    JSON.parse(localStorage.getItem("travelmateBookings")) || [];

  const booking = bookings.find(
    (item) => String(item.id) === String(id)
  );

  if (!booking) {
    return (
      <main className="booking-details-not-found">
        <div>
          <span>TravelMate</span>
          <h1>Booking Not Found</h1>

          <p>
            The booking you are looking for does not exist
            or has already been cancelled.
          </p>

          <Link to="/my-bookings">
            ← Back to My Bookings
          </Link>
        </div>
      </main>
    );
  }

  const pricePerPerson = Number(
    booking.pricePerTraveler ??
      booking.price ??
      0
  );

  const travelers = Number(booking.travelers) || 1;

  const estimatedTotal = Number(
    booking.total ??
      booking.totalPrice ??
      pricePerPerson * travelers
  );

  const handleCancelBooking = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    const updatedBookings = bookings.filter(
      (item) =>
        String(item.id) !== String(booking.id)
    );

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify(updatedBookings)
    );

    navigate("/my-bookings");
  };

  return (
    <main className="booking-details-page">
      <div className="booking-details-container">
        <Link
          to="/my-bookings"
          className="booking-details-back"
        >
          ← Back to My Bookings
        </Link>

        <section className="booking-details-header">
          <span>TravelMate</span>

          <h1>Booking Details</h1>

          <p>
            View the complete information for your
            travel booking.
          </p>
        </section>

        <section className="booking-details-card">
          {/* =========================
              DESTINATION HEADER
          ========================= */}

          <div className="booking-details-top">
            <div className="booking-details-destination">
              <span>Destination</span>

              <h2>{booking.destination}</h2>

              <p>{booking.country}</p>
            </div>

            <span className="booking-details-status">
              {booking.status || "Confirmed"}
            </span>
          </div>

          {/* =========================
              DESTINATION INFORMATION
          ========================= */}

          <div className="booking-destination-info">
            {booking.duration && (
              <div className="booking-info-item">
                <span>Duration</span>

                <strong>
                  {booking.duration}
                </strong>
              </div>
            )}

            {booking.rating && (
              <div className="booking-info-item">
                <span>Rating</span>

                <strong>
                  ⭐ {booking.rating}
                </strong>
              </div>
            )}

            <div className="booking-info-item">
              <span>Price Per Person</span>

              <strong>
                ${pricePerPerson.toLocaleString()}
              </strong>
            </div>

            <div className="booking-info-item">
              <span>Travelers</span>

              <strong>{travelers}</strong>
            </div>
          </div>

          {/* =========================
              BOOKING INFORMATION
          ========================= */}

          <div className="booking-details-section">
            <h3>Booking Information</h3>

            <div className="booking-details-grid">
              <div>
                <span>Booking ID</span>

                <strong>
                  #{booking.id}
                </strong>
              </div>

              <div>
                <span>Traveler</span>

                <strong>
                  {booking.name}
                </strong>
              </div>

              <div>
                <span>Email</span>

                <strong>
                  {booking.email}
                </strong>
              </div>

              <div>
                <span>Phone</span>

                <strong>
                  {booking.phone}
                </strong>
              </div>

              <div>
                <span>Travel Date</span>

                <strong>
                  {booking.date}
                </strong>
              </div>

              <div>
                <span>Payment Method</span>

                <strong>
                  {booking.payment ||
                    "Not specified"}
                </strong>
              </div>
            </div>
          </div>

          {/* =========================
              PRICE SUMMARY
          ========================= */}

          <div className="booking-details-total">
            <div>
              <span>
                Estimated Booking Total
              </span>

              <small>
                ${pricePerPerson.toLocaleString()} ×{" "}
                {travelers} traveler
                {travelers > 1 ? "s" : ""}
              </small>
            </div>

            <strong>
              ${estimatedTotal.toLocaleString()}
            </strong>
          </div>

          {/* =========================
              SPECIAL REQUESTS
          ========================= */}

          {booking.requests && (
            <div className="booking-details-requests">
              <h3>Special Requests</h3>

              <p>{booking.requests}</p>
            </div>
          )}

          {/* =========================
              ACTIONS
          ========================= */}

          <div className="booking-details-actions">
            <Link
              to="/my-bookings"
              className="booking-details-back-button"
            >
              Back to My Bookings
            </Link>

            <button
              type="button"
              className="booking-details-cancel-button"
              onClick={handleCancelBooking}
            >
              Cancel Booking
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookingDetails;