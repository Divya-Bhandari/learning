import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./Booking.css";

const destinations = {
  1: {
    name: "Pokhara",
    country: "Nepal",
    price: 250,
  },
  2: {
    name: "Kathmandu",
    country: "Nepal",
    price: 200,
  },
  3: {
    name: "Chitwan",
    country: "Nepal",
    price: 220,
  },
  4: {
    name: "Everest Base Camp",
    country: "Nepal",
    price: 650,
  },
};

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinations[id];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "1",
    requests: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLoggedIn =
      localStorage.getItem("travelmateLoggedIn") === "true";

    if (!isLoggedIn) {
      setError("Please login before making a booking.");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.date
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const booking = {
      id: Date.now().toString(),
      destinationId: id,
      destination: destination.name,
      country: destination.country,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      travelers: Number(formData.travelers),
      requests: formData.requests,
      pricePerTraveler: destination.price,
      total:
        destination.price * Number(formData.travelers),
      status: "Confirmed",
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem("travelmateBookings")
      ) || [];

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify([
        ...existingBookings,
        booking,
      ])
    );

    navigate("/booking-success");
  };

  if (!destination) {
    return (
      <main className="booking-page">
        <div className="booking-container">

          <Link
            to="/destinations"
            className="booking-back"
          >
            ← Back to Destinations
          </Link>

          <div className="booking-form-card">

            <h2>Destination Not Found</h2>

            <p>
              The destination you are trying to book
              does not exist.
            </p>

            <Link to="/destinations">
              Explore Destinations
            </Link>

          </div>

        </div>
      </main>
    );
  }

  const total =
    destination.price *
    Number(formData.travelers);

  return (
    <main className="booking-page">

      <div className="booking-container">

        <Link
          to={`/destinations/${id}`}
          className="booking-back"
        >
          ← Back to Destination
        </Link>

        <section className="booking-header">

          <span>TravelMate</span>

          <h1>Book Your Journey</h1>

          <p>
            Complete the form below to plan your trip
            to {destination.name}.
          </p>

        </section>

        <section className="booking-layout">

          <aside className="booking-summary">

            <div className="booking-summary-label">
              Your Trip
            </div>

            <h2>
              {destination.name}
            </h2>

            <p className="booking-country">
              {destination.country}
            </p>

            <div className="summary-divider"></div>

            <div className="summary-row">

              <span>
                Price per traveler
              </span>

              <strong>
                ${destination.price}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Travelers
              </span>

              <strong>
                {formData.travelers}
              </strong>

            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">

              <span>Total</span>

              <strong>
                ${total}
              </strong>

            </div>

            <div className="summary-note">
              Your booking information is stored
              securely in your TravelMate account.
            </div>

          </aside>

          <div className="booking-form-card">

            {error && (
              <div className="booking-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <section className="form-section">

                <h2>
                  Personal Information
                </h2>

                <div className="form-grid">

                  <div className="booking-field">

                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />

                  </div>

                  <div className="booking-field">

                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />

                  </div>

                  <div className="booking-field">

                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />

                  </div>

                </div>

              </section>

              <section className="form-section">

                <h2>
                  Trip Information
                </h2>

                <div className="form-grid">

                  <div className="booking-field">

                    <label htmlFor="date">
                      Travel Date *
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="booking-field">

                    <label htmlFor="travelers">
                      Number of Travelers
                    </label>

                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                    >
                      <option value="1">
                        1 Traveler
                      </option>

                      <option value="2">
                        2 Travelers
                      </option>

                      <option value="3">
                        3 Travelers
                      </option>

                      <option value="4">
                        4 Travelers
                      </option>

                      <option value="5">
                        5 Travelers
                      </option>

                      <option value="6">
                        6 Travelers
                      </option>

                      <option value="7">
                        7 Travelers
                      </option>

                      <option value="8">
                        8 Travelers
                      </option>

                      <option value="9">
                        9 Travelers
                      </option>

                      <option value="10">
                        10 Travelers
                      </option>

                    </select>

                  </div>

                </div>

              </section>

              <section className="form-section">

                <h2>
                  Special Requests
                </h2>

                <div className="booking-field">

                  <label htmlFor="requests">
                    Additional Information
                  </label>

                  <textarea
                    id="requests"
                    name="requests"
                    rows="5"
                    value={formData.requests}
                    onChange={handleChange}
                    placeholder="Tell us about any special requests..."
                  />

                </div>

              </section>

              <div className="booking-final-total">

                <div>

                  <span>
                    Total Estimated Price
                  </span>

                  <small>
                    {formData.travelers} traveler(s) × $
                    {destination.price}
                  </small>

                </div>

                <strong>
                  ${total}
                </strong>

              </div>

              <button
                type="submit"
                className="booking-submit-button"
              >
                Confirm Booking
              </button>

              <p className="booking-security">
                🔒 Your booking information is handled
                securely by TravelMate.
              </p>

            </form>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Booking;