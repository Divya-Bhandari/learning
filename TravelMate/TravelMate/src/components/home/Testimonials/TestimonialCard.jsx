const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">

      <img 
        src={testimonial.image}
        alt={testimonial.name}
      />

      <h3>{testimonial.name}</h3>

      <span>{testimonial.country}</span>

      <p>
        "{testimonial.review}"
      </p>

      <div>
        ⭐⭐⭐⭐⭐
      </div>

    </div>
  );
};

export default TestimonialCard;