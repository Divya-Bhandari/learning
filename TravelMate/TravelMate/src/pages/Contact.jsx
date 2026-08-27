import { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      <div className="contact-container">

        <section className="contact-header">

          <span>TravelMate</span>

          <h1>Get In Touch</h1>

          <p>
            Have a question about your next journey?
            We are here to help you plan your perfect
            travel experience.
          </p>

        </section>

        <section className="contact-layout">

          <div className="contact-info">

            <span className="contact-section-label">
              Contact Us
            </span>

            <h2>
              Let's plan your next adventure.
            </h2>

            <p>
              Whether you need help choosing a
              destination, have a question about a
              booking, or simply want to talk about
              travel, feel free to reach out to us.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  📍
                </div>

                <div>
                  <span>Visit Us</span>

                  <strong>
                    Kathmandu, Nepal
                  </strong>
                </div>

              </div>

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  ✉️
                </div>

                <div>
                  <span>Email Us</span>

                  <strong>
                    info@travelmate.com
                  </strong>
                </div>

              </div>

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  📞
                </div>

                <div>
                  <span>Call Us</span>

                  <strong>
                    +977 9800000000
                  </strong>
                </div>

              </div>

            </div>

            <div className="contact-hours">

              <span>Available Hours</span>

              <p>
                Sunday – Friday: 9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

          <div className="contact-form-card">

            <h2>Send Us a Message</h2>

            <p>
              Fill out the form below and our team
              will get back to you soon.
            </p>

            {submitted && (
              <div className="contact-success">
                Your message has been sent successfully.
                Thank you for contacting TravelMate!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-field">

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
                    <small className="contact-error">
                      {errors.name}
                    </small>
                  )}

                </div>

                <div className="contact-field">

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
                    <small className="contact-error">
                      {errors.email}
                    </small>
                  )}

                </div>

              </div>

              <div className="contact-field">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to ask?"
                />

                {errors.subject && (
                  <small className="contact-error">
                    {errors.subject}
                  </small>
                )}

              </div>

              <div className="contact-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />

                {errors.message && (
                  <small className="contact-error">
                    {errors.message}
                  </small>
                )}

              </div>

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
              </button>

            </form>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Contact;