import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import DestinationData from "../destinations/DestinationData";

import "./Booking.css";
import "./BookingSuccess.css";

const Booking = () => {
  const { id } = useParams();

  const destination = DestinationData.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
    payment: "",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  if (submitted) {
    return (
      <main className="booking-success-page">
        <div className="booking-success-card">
          <div className="success-icon">✓</div>

          <span>TravelMate Booking</span>

          <h1>Booking Request Submitted!</h1>

          <p>
            Thank you, {formData.name}. Your booking request for{" "}
            <strong>{destination.name}</strong> has been received.
          </p>

          <p>
            Our travel team will contact you soon with the
            next steps.
          </p>

          <div className="success-details">
            <div>
              <span>Destination</span>
              <strong>{destination.name}</strong>
            </div>

            <div>
              <span>Travelers</span>
              <strong>{formData.travelers}</strong>
            </div>

            <div>
              <span>Travel Date</span>
              <strong>{formData.date}</strong>
            </div>
          </div>

          <Link
            to="/destinations"
            className="success-back-button"
          >
            Explore More Destinations
          </Link>
        </div>
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

            <form onSubmit={handleSubmit}>

              <div className="booking-form-row">

                <div className="booking-field">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="booking-form-row">

                <div className="booking-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="travelers">
                    Number of Travelers
                  </label>

                  <input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="booking-form-row">

                <div className="booking-field">
                  <label htmlFor="date">
                    Travel Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="payment">
                    Payment Method
                  </label>

                  <select
                    id="payment"
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
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
                <label htmlFor="requests">
                  Special Requests
                </label>

                <textarea
                  id="requests"
                  name="requests"
                  rows="5"
                  value={formData.requests}
                  onChange={handleChange}
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

                  <strong>
                    {destination.duration}
                  </strong>
                </div>

                <div>
                  <small>Rating</small>

                  <strong>
                    ⭐ {destination.rating}
                  </strong>
                </div>

              </div>

              <div className="booking-price">
                <span>Starting From</span>

                <strong>
                  ${destination.price}
                </strong>

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