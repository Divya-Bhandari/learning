import "./Newsletter.css";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-label">Stay Connected</span>

          <h2>Get travel inspiration in your inbox</h2>

          <p>
            Subscribe to receive travel tips, destination ideas, and
            useful guides for your next adventure.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>

          <small>
            No spam. Just useful travel inspiration.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;