import "./FeaturedTours.css";

const tours = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    location: "Nepal",
    rating: "4.9",
    duration: "14 Days",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900",
  },
  {
    id: 2,
    title: "Bali Island Escape",
    location: "Indonesia",
    rating: "4.8",
    duration: "7 Days",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    rating: "5.0",
    duration: "10 Days",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900",
  },
];

const FeaturedTours = () => {
  return (
    <section className="featured-tours">
      <div className="featured-tours-container">
        <div className="featured-tours-header">
          <span>Featured Tours</span>

          <h2>Popular Travel Experiences</h2>

          <p>
            Explore some of our most popular trips and start planning your
            next adventure.
          </p>
        </div>

        <div className="featured-tours-grid">
          {tours.map((tour) => (
            <article className="featured-tour-card" key={tour.id}>
              <div className="featured-tour-image">
                <img src={tour.image} alt={tour.title} />
              </div>

              <div className="featured-tour-content">
                <h3>{tour.title}</h3>

                <p className="featured-tour-location">
                  📍 {tour.location}
                </p>

                <div className="featured-tour-info">
                  <span className="featured-tour-rating">
                    ⭐ {tour.rating}
                  </span>

                  <span className="featured-tour-duration">
                    🕒 {tour.duration}
                  </span>
                </div>

                <div className="featured-tour-bottom">
                  <span className="featured-tour-price">
                    {tour.price}
                  </span>

                  <button type="button" className="featured-tour-button">
                    View Tour
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;