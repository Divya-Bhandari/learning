import { Link } from "react-router-dom";

import "./MyBookings.css";

const MyBookings = () => {
  const bookings =
    JSON.parse(
      localStorage.getItem("travelmateBookings")
    ) || [];

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

            {bookings.map((booking) => {

              const pricePerPerson =
                Number(booking.price) || 0;

              const travelers =
                Number(booking.travelers) || 1;

              const estimatedTotal =
                Number(booking.totalPrice) ||
                pricePerPerson * travelers;

              return (
                <div
                  className="booking-card"
                  key={booking.id}
                >

                  <div className="booking-card-header">

                    <div>

                      <span>
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
                      Confirmed
                    </span>

                  </div>

                  <div className="booking-card-details">

                    <div>
                      <span>
                        Traveler
                      </span>

                      <strong>
                        {booking.name}
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
                        Travel Date
                      </span>

                      <strong>
                        {booking.date}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Payment
                      </span>

                      <strong>
                        {booking.payment}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Price Per Person
                      </span>

                      <strong>
                        ${pricePerPerson.toLocaleString()}
                      </strong>
                    </div>

                  </div>

                  <div className="booking-total">

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

                    <Link
                      to={`/booking-details/${booking.id}`}
                      className="view-booking-button"
                    >
                      View Booking Details
                    </Link>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </main>
  );
};

export default MyBookings;