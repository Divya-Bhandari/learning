import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

const destinationData = {
  "1": {
    destination: "Kathmandu",
    country: "Nepal",
    price: 450,
  },
  "2": {
    destination: "Bhutan",
    country: "Bhutan",
    price: 850,
  },
  "3": {
    destination: "Paris",
    country: "France",
    price: 1200,
  },
  "4": {
    destination: "Rome",
    country: "Italy",
    price: 1100,
  },
  "5": {
    destination: "Tokyo",
    country: "Japan",
    price: 1400,
  },
  "6": {
    destination: "Switzerland",
    country: "Switzerland",
    price: 1500,
  },
};

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination =
    destinationData[id] || {
      destination: "Travel Destination",
      country: "Unknown",
      price: 500,
    };

  const savedUser =
    JSON.parse(localStorage.getItem("travelmateUser")) || {};

  const [formData, setFormData] = useState({
    name: savedUser.name || "",
    email: savedUser.email || "",
    phone: "",
    travelers: 1,
    date: "",
    payment: "Credit / Debit Card",
    requests: "",
  });

  const [error, setError] = useState("");

  const totalPrice =
    destination.price * Number(formData.travelers || 1);

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

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.date) {
      setError("Please select your travel date.");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("Travel date cannot be in the past.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      destination: destination.destination,
      country: destination.country,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      travelers: Number(formData.travelers),
      date: formData.date,
      payment: formData.payment,
      price: destination.price,
      totalPrice,
      requests: formData.requests,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("travelmateBookings")) || [];

    const updatedBookings = [
      ...existingBookings,
      newBooking,
    ];

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify(updatedBookings)
    );

    navigate("/booking-success");
  };

  return (
    <main className="booking-page">
      <div className="booking-container">

        <Link to="/destinations" className="booking-back">
          ← Back to Destinations
        </Link>

        <div className="booking-header">
          <span>TravelMate</span>
          <h1>Complete Your Booking</h1>
          <p>
            Enter your details below to reserve your trip.
          </p>
        </div>

        <div className="booking-layout">

          {/* Destination Summary */}
          <aside className="booking-summary">

            <div className="booking-summary-label">
              Your Trip
            </div>

            <h2>{destination.destination}</h2>

            <p className="booking-country">
              {destination.country}
            </p>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Price per person</span>
              <strong>
                ${destination.price.toLocaleString()}
              </strong>
            </div>

            <div className="summary-row">
              <span>Travelers</span>
              <strong>
                {formData.travelers}
              </strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ${totalPrice.toLocaleString()}
              </strong>
            </div>

            <div className="summary-note">
              Final price is calculated based on the
              number of travelers.
            </div>

          </aside>

          {/* Booking Form */}
          <section className="booking-form-card">

            {error && (
              <div className="booking-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-section">
                <h2>Personal Information</h2>

                <div className="form-grid">

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

                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                    >
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5">5 Travelers</option>
                      <option value="6">6 Travelers</option>
                      <option value="7">7 Travelers</option>
                      <option value="8">8 Travelers</option>
                      <option value="9">9 Travelers</option>
                      <option value="10">10 Travelers</option>
                    </select>
                  </div>

                </div>
              </div>

              <div className="form-section">
                <h2>Travel Information</h2>

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
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    required
                  />

                </div>
              </div>

              <div className="form-section">
                <h2>Payment Information</h2>

                <div className="booking-field">

                  <label htmlFor="payment">
                    Payment Method
                  </label>

                  <select
                    id="payment"
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                  >
                    <option value="Credit / Debit Card">
                      Credit / Debit Card
                    </option>

                    <option value="PayPal">
                      PayPal
                    </option>

                    <option value="Bank Transfer">
                      Bank Transfer
                    </option>

                    <option value="Cash">
                      Cash
                    </option>
                  </select>

                </div>
              </div>

              <div className="form-section">
                <h2>Special Requests</h2>

                <div className="booking-field">

                  <label htmlFor="requests">
                    Additional Requests
                  </label>

                  <textarea
                    id="requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    placeholder="Any special requests or requirements?"
                    rows="5"
                  ></textarea>

                </div>

              </div>

              <div className="booking-final-total">

                <div>
                  <span>Booking Total</span>
                  <small>
                    {formData.travelers} traveler
                    {Number(formData.travelers) > 1
                      ? "s"
                      : ""}
                  </small>
                </div>

                <strong>
                  ${totalPrice.toLocaleString()}
                </strong>

              </div>

              <button
                type="submit"
                className="booking-submit-button"
              >
                Confirm Booking
              </button>

              <p className="booking-security">
                Your booking information is stored securely
                for your TravelMate account.
              </p>

            </form>

          </section>

        </div>
      </div>
    </main>
  );
};

export default Booking;