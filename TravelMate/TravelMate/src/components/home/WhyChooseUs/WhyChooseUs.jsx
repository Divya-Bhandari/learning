import "./WhyChooseUs.css";
import whyChooseData from "./whyChooseData";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <div className="container">
        <h2>Why Choose TravelMate?</h2>
        <p className="subtitle">
          We make every journey comfortable, affordable, and unforgettable.
        </p>

        <div className="why-grid">
          {whyChooseData.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;