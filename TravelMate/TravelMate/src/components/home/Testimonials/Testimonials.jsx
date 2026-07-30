import "./Testimonials.css";
import TestimonialData from "./TestimonialData";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <SectionHeader
        tag="Testimonials"
        title="What Our Travelers Say"
        subtitle="Read what our happy travelers say about their unforgettable journeys."
      />

      <div className="testimonial-grid">
        {TestimonialData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;