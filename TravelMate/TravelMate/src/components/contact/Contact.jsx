import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>Get In Touch</span>

        <h1>Contact TravelMate</h1>

        <p>
          Have a question about your next journey? Our team is
          here to help you plan your perfect trip.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            Whether you need help choosing a destination, planning
            your trip, or have a question about our services,
            feel free to contact us.
          </p>

          <div className="contact-item">
            <div>📍</div>
            <div>
              <span>Address</span>
              <strong>Kathmandu, Nepal</strong>
            </div>
          </div>

          <div className="contact-item">
            <div>📧</div>
            <div>
              <span>Email</span>
              <strong>info@travelmate.com</strong>
            </div>
          </div>

          <div className="contact-item">
            <div>📞</div>
            <div>
              <span>Phone</span>
              <strong>+977 9800000000</strong>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          <form>
            <div className="contact-form-row">
              <div className="contact-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label>Subject</label>

              <input
                type="text"
                placeholder="What can we help you with?"
                required
              />
            </div>

            <div className="contact-field">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;