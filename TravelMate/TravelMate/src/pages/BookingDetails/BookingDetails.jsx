import { Link, useParams } from "react-router-dom";

import "./BookingDetails.css";

const BookingDetails = () => {
  const { id } = useParams();

  const bookings =
    JSON.parse(
      localStorage.getItem("travelmateBookings")
    ) || [];

  const booking = bookings.find(
    (item) => String(item.id) === String(id)
  );

  if (!booking) {
    return (
      <main className="booking-details-not-found">
        <h1>Booking Not Found</h1>

        <p>
          The booking you are looking for does not exist.
        </p>

        <Link to="/my-bookings">
          ← Back to My Bookings
        </Link>
      </main>
    );
  }

  const pricePerPerson =
    Number(booking.price) || 0;

  const travelers =
    Number(booking.travelers) || 1;

  const estimatedTotal =
    Number(booking.totalPrice) ||
    pricePerPerson * travelers;

  return (
    <main className="booking-details-page">

      <div className="booking-details-container">

        <Link
          to="/my-bookings"
          className="booking-details-back"
        >
          ← Back to My Bookings
        </Link>

        <div className="booking-details-header">

          <span>TravelMate</span>

          <h1>Booking Details</h1>

          <p>
            View the complete information for your
            booking.
          </p>

        </div>

        <div className="booking-details-card">

          <div className="booking-details-top">

            <div>
              <span>Destination</span>

              <h2>
                {booking.destination}
              </h2>

              <p>
                {booking.country}
              </p>
            </div>

            <span className="booking-details-status">
              Confirmed
            </span>

          </div>

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
              <span>Travelers</span>

              <strong>
                {travelers}
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
                {booking.payment}
              </strong>
            </div>

            <div>
              <span>Price Per Person</span>

              <strong>
                ${pricePerPerson.toLocaleString()}
              </strong>
            </div>

          </div>

          <div className="booking-details-total">

            <span>
              Estimated Booking Total
            </span>

            <strong>
              ${estimatedTotal.toLocaleString()}
            </strong>

            <small>
              ${pricePerPerson.toLocaleString()} ×{" "}
              {travelers} traveler
              {travelers > 1 ? "s" : ""}
            </small>

          </div>

          {booking.requests && (
            <div className="booking-details-requests">

              <span>
                Special Requests
              </span>

              <p>
                {booking.requests}
              </p>

            </div>
          )}

        </div>

      </div>

    </main>
  );
};

export default BookingDetails;