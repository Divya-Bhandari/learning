import { useState } from "react";
import { Link } from "react-router-dom";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("travelmateBookings")) || []
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
  };

  return (
    <main className="my-bookings-page">
      <div className="my-bookings-container">

        <div className="my-bookings-header">
          <span>TravelMate</span>

          <h1>My Bookings</h1>

          <p>
            View and manage your travel bookings.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="no-bookings">
            <h2>No Bookings Yet</h2>

            <p>
              You haven't made any bookings yet.
            </p>

            <Link to="/destinations">
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="bookings-list">

            {bookings.map((booking) => (
              <div
                className="booking-card"
                key={booking.id}
              >

                <div className="booking-card-header">

                  <div>
                    <span>Destination</span>

                    <h2>
                      {booking.destination}
                    </h2>

                    <p>
                      {booking.country}
                    </p>
                  </div>

                  <span className="booking-status">
                    Confirmed
                  </span>

                </div>

                <div className="booking-card-details">

                  <div>
                    <span>Traveler</span>
                    <strong>
                      {booking.name}
                    </strong>
                  </div>

                  <div>
                    <span>Travelers</span>
                    <strong>
                      {booking.travelers}
                    </strong>
                  </div>

                  <div>
                    <span>Travel Date</span>
                    <strong>
                      {booking.date}
                    </strong>
                  </div>

                  <div>
                    <span>Payment</span>
                    <strong>
                      {booking.payment}
                    </strong>
                  </div>

                  <div>
                    <span>Price</span>
                    <strong>
                      ${booking.price}
                    </strong>
                  </div>

                </div>

                {booking.requests && (
                  <div className="booking-requests">

                    <span>
                      Special Requests
                    </span>

                    <p>
                      {booking.requests}
                    </p>

                  </div>
                )}

                <div className="booking-card-actions">

                  <button
                    type="button"
                    className="delete-booking-button"
                    onClick={() =>
                      handleDelete(booking.id)
                    }
                  >
                    Delete Booking
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
};

export default MyBookings;