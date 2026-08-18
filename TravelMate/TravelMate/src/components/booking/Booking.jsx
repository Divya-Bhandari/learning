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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.travelers || Number(formData.travelers) < 1) {
      newErrors.travelers =
        "Number of travelers must be at least 1.";
    }

    if (!formData.date) {
      newErrors.date = "Please select your travel date.";
    }

    if (!formData.payment) {
      newErrors.payment =
        "Please select a payment method.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const existingBookings =
      JSON.parse(
        localStorage.getItem("travelmateBookings")
      ) || [];

    const totalPrice =
      destination.price * Number(formData.travelers);

    const newBooking = {
      id: Date.now(),

      name: formData.name,
      email: formData.email,
      phone: formData.phone,

      travelers: Number(formData.travelers),

      date: formData.date,

      payment: formData.payment,

      requests: formData.requests,

      destination: destination.name,
      country: destination.country,

      price: destination.price,

      totalPrice: totalPrice,
    };

    localStorage.setItem(
      "travelmateBookings",
      JSON.stringify([
        ...existingBookings,
        newBooking,
      ])
    );

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

  const totalPrice =
    destination.price * Number(formData.travelers);

  if (submitted) {
    return (
      <main className="booking-success-page">

        <div className="booking-success-card">

          <div className="success-icon">
            ✓
          </div>

          <span>
            TravelMate Booking
          </span>

          <h1>
            Booking Request Submitted!
          </h1>

          <p>
            Thank you, {formData.name}. Your
            booking request for{" "}
            <strong>
              {destination.name}
            </strong>{" "}
            has been received.
          </p>

          <p>
            Our travel team will contact you
            soon with the next steps.
          </p>

          <div className="success-details">

            <div>
              <span>
                Destination
              </span>

              <strong>
                {destination.name}
              </strong>
            </div>

            <div>
              <span>
                Travelers
              </span>

              <strong>
                {formData.travelers}
              </strong>
            </div>

            <div>
              <span>
                Travel Date
              </span>

              <strong>
                {formData.date}
              </strong>
            </div>

            <div>
              <span>
                Total Price
              </span>

              <strong>
                ${totalPrice}
              </strong>
            </div>

          </div>

          <Link
            to="/my-bookings"
            className="success-back-button"
          >
            View My Bookings
          </Link>

          <br />

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

          <span>
            TravelMate Booking
          </span>

          <h1>
            Book Your Trip
          </h1>

          <p>
            Complete the form below to start
            planning your journey to{" "}
            {destination.name}.
          </p>

        </div>

        <div className="booking-layout">

          {/* BOOKING FORM */}

          <div className="booking-form-card">

            <h2>
              Your Information
            </h2>

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
                  />

                  {errors.name && (
                    <small className="booking-error">
                      {errors.name}
                    </small>
                  )}

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
                  />

                  {errors.email && (
                    <small className="booking-error">
                      {errors.email}
                    </small>
                  )}

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
                  />

                  {errors.phone && (
                    <small className="booking-error">
                      {errors.phone}
                    </small>
                  )}

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
                  />

                  {errors.travelers && (
                    <small className="booking-error">
                      {errors.travelers}
                    </small>
                  )}

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
                  />

                  {errors.date && (
                    <small className="booking-error">
                      {errors.date}
                    </small>
                  )}

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

                  {errors.payment && (
                    <small className="booking-error">
                      {errors.payment}
                    </small>
                  )}

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

          {/* BOOKING SUMMARY */}

          <aside className="booking-summary">

            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="booking-summary-content">

              <span>
                Selected Destination
              </span>

              <h2>
                {destination.name}
              </h2>

              <p>
                {destination.country}
              </p>

              <div className="booking-summary-info">

                <div>

                  <small>
                    Duration
                  </small>

                  <strong>
                    {destination.duration}
                  </strong>

                </div>

                <div>

                  <small>
                    Rating
                  </small>

                  <strong>
                    ⭐ {destination.rating}
                  </strong>

                </div>

              </div>

              {/* PRICE PER PERSON */}

              <div className="booking-price">

  <span>
    Starting From
  </span>

  <strong>
    ${destination.price}
  </strong>

  <small>
    per person
  </small>

</div>

<div className="booking-total">

  <span>
    Estimated Booking Total
  </span>

  <strong>
    $
    {(
      Number(destination.price) *
      Number(formData.travelers || 1)
    ).toLocaleString()}
  </strong>

  <small>
    {formData.travelers} traveler
    {Number(formData.travelers) > 1 ? "s" : ""}
  </small>

</div>
              {/* ESTIMATED TOTAL */}

              <div className="booking-total-price">

                <span>
                  Estimated Total
                </span>

                <strong>
                  ${totalPrice}
                </strong>

                <small>
                  {formData.travelers} traveler
                  {Number(formData.travelers) !== 1
                    ? "s"
                    : ""}
                </small>

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