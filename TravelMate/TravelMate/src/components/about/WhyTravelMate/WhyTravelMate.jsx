import "./WhyTravelMate.css";

const features = [
  {
    id: 1,
    icon: "⭐",
    title: "Best Price Guarantee",
    description:
      "We provide competitive prices with no hidden charges, ensuring the best value for your journey.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Safe & Secure Booking",
    description:
      "Your bookings and payments are protected with secure and reliable systems.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Worldwide Destinations",
    description:
      "Explore hundreds of destinations across the globe with carefully selected travel experiences.",
  },
  {
    id: 4,
    icon: "💬",
    title: "24/7 Customer Support",
    description:
      "Our support team is available around the clock to assist you whenever you need help.",
  },
];

const WhyTravelMate = () => {
  return (
    <section className="why-travelmate">
      <div className="container">

        <div className="section-heading">
          <span>Why Choose Us</span>
          <h2>Why Travelers Love TravelMate</h2>
          <p>
            We make every journey simple, secure, and unforgettable with
            trusted services and personalized travel experiences.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTravelMate;