import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("travelmateBookings")) || [];

    const savedUser =
      JSON.parse(localStorage.getItem("travelmateUser")) || null;

    if (savedUser?.email) {
      const userBookings = savedBookings.filter(
        (booking) =>
          booking.email?.toLowerCase() === savedUser.email.toLowerCase()
      );

      setBookings(userBookings);
    } else {
      setBookings(savedBookings);
    }
  }, []);

  const handleDelete = (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmed) return;

    const savedBookings =
      JSON.parse(localStorage.getItem("travelmateBookings")) || [];

    const updatedBookings = savedBookings.filter(
      (booking) => booking.id !== bookingId
    );

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify(updatedBookings)
    );

    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id !== bookingId)
    );
  };

  return (
    <main className="my-bookings-page">
      <section className="my-bookings-header">
        <div className="my-bookings-header-container">
          <span>TravelMate</span>
          <h1>My Bookings</h1>
          <p>
            Manage your upcoming trips and view your booking details.
          </p>
        </div>
      </section>

      <section className="my-bookings-content">
        <div className="my-bookings-container">
          {bookings.length === 0 ? (
            <div className="my-bookings-empty">
              <div className="my-bookings-empty-icon">✈️</div>

              <h2>No bookings yet</h2>

              <p>
                You haven't booked any trips yet. Explore our destinations
                and start planning your next adventure.
              </p>

              <Link
                to="/destinations"
                className="my-bookings-explore-button"
              >
                Explore Destinations
              </Link>
            </div>
          ) : (
            <>
              <div className="my-bookings-top">
                <div>
                  <span>Your Trips</span>
                  <h2>{bookings.length} Booking{bookings.length !== 1 ? "s" : ""}</h2>
                </div>

                <Link
                  to="/destinations"
                  className="my-bookings-new-button"
                >
                  + Book Another Trip
                </Link>
              </div>

              <div className="my-bookings-list">
                {bookings.map((booking) => (
                  <article
                    className="my-booking-card"
                    key={booking.id}
                  >
                    <div className="my-booking-image">
                      <img
                        src={booking.image}
                        alt={booking.destination}
                      />
                    </div>

                    <div className="my-booking-content">
                      <div className="my-booking-main">
                        <div>
                          <span className="my-booking-country">
                            📍 {booking.country}
                          </span>

                          <h3>{booking.destination}</h3>

                          <p>
                            {booking.duration} •{" "}
                            {booking.travelers} traveler
                            {Number(booking.travelers) !== 1 ? "s" : ""}
                          </p>
                        </div>

                        <span className="my-booking-status">
                          {booking.status || "Confirmed"}
                        </span>
                      </div>

                      <div className="my-booking-details">
                        <div>
                          <span>Travel Date</span>
                          <strong>{booking.date}</strong>
                        </div>

                        <div>
                          <span>Travelers</span>
                          <strong>{booking.travelers}</strong>
                        </div>

                        <div>
                          <span>Total</span>
                          <strong>
                            ${Number(booking.total).toLocaleString()}
                          </strong>
                        </div>
                      </div>

                      <div className="my-booking-actions">
                        <Link
                          to={`/booking-details/${booking.id}`}
                          className="my-booking-view-button"
                        >
                          View Details
                        </Link>

                        <button
                          type="button"
                          className="my-booking-delete-button"
                          onClick={() => handleDelete(booking.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default MyBookings;