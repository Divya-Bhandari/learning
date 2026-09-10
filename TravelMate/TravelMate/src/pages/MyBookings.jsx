import { Link, useNavigate } from "react-router-dom";
import "./MyBookings.css";

const MyBookings = () => {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("travelmateLoggedIn") === "true";

  const bookings =
    JSON.parse(localStorage.getItem("travelmateBookings")) || [];

  if (!isLoggedIn) {
    return (
      <main className="my-bookings-not-found">
        <h1>Login Required</h1>

        <p>
          Please login to view and manage your bookings.
        </p>

        <Link to="/login">
          Login
        </Link>
      </main>
    );
  }

  const handleViewBooking = (id) => {
    navigate(`/booking-details/${id}`);
  };

  const handleCancelBooking = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    const updatedBookings = bookings.filter(
      (booking) =>
        String(booking.id) !== String(id)
    );

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify(updatedBookings)
    );

    window.location.reload();
  };

  return (
    <main className="my-bookings-page">

      <div className="my-bookings-container">

        <section className="my-bookings-header">

          <span>TravelMate</span>

          <h1>My Bookings</h1>

          <p>
            View and manage all your travel bookings
            in one place.
          </p>

        </section>

        {bookings.length === 0 ? (
          <div className="my-bookings-empty">

            <div className="empty-icon">
              ✈
            </div>

            <h2>
              No Bookings Yet
            </h2>

            <p>
              You haven't made any bookings yet.
              Explore our destinations and plan
              your next journey.
            </p>

            <Link
              to="/destinations"
              className="browse-destinations-button"
            >
              Explore Destinations
            </Link>

          </div>
        ) : (
          <div className="bookings-list">

            {bookings.map((booking) => {

              const travelers =
                Number(booking.travelers) || 1;

              const price =
                Number(
                  booking.pricePerTraveler ??
                  booking.price ??
                  0
                );

              const total =
                Number(
                  booking.total ??
                  booking.totalPrice ??
                  price * travelers
                );

              return (
                <article
                  className="booking-card"
                  key={booking.id}
                >

                  <div className="booking-card-main">

                    <div className="booking-card-info">

                      <span className="booking-label">
                        Destination
                      </span>

                      <h2>
                        {booking.destination}
                      </h2>

                      <p>
                        {booking.country}
                      </p>

                    </div>

                    <span className="booking-status">
                      {booking.status || "Confirmed"}
                    </span>

                  </div>

                  <div className="booking-card-details">

                    <div>
                      <span>
                        Booking ID
                      </span>

                      <strong>
                        #{booking.id}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Travel Date
                      </span>

                      <strong>
                        {booking.date}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Travelers
                      </span>

                      <strong>
                        {travelers}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Total
                      </span>

                      <strong>
                        ${total.toLocaleString()}
                      </strong>
                    </div>

                  </div>

                  <div className="booking-card-footer">

                    <small>
                      Booked by {booking.name}
                    </small>

                    <div className="booking-card-actions">

                      <button
                        type="button"
                        className="view-booking-button"
                        onClick={() =>
                          handleViewBooking(
                            booking.id
                          )
                        }
                      >
                        View Details
                      </button>

                      <button
                        type="button"
                        className="cancel-booking-button"
                        onClick={() =>
                          handleCancelBooking(
                            booking.id
                          )
                        }
                      >
                        Cancel Booking
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        )}

      </div>

    </main>
  );
};

export default MyBookings;