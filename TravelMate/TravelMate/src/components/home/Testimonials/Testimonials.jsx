import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "TravelMate made planning my vacation so easy. Everything was perfectly organized and stress-free.",
  },
  {
    id: 2,
    name: "David Lee",
    country: "Singapore",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Excellent service and amazing destinations. I highly recommend TravelMate to anyone who loves traveling.",
  },
  {
    id: 3,
    name: "Emily Brown",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The booking process was simple, and the customer support team was available whenever I needed help.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>What Our Travelers Say</h2>
        <p>Real experiences from our happy customers.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((person) => (
          <div className="testimonial-card" key={person.id}>
            <img src={person.image} alt={person.name} />

            <h3>{person.name}</h3>

            <span>{person.country}</span>

            <p>"{person.review}"</p>

            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;