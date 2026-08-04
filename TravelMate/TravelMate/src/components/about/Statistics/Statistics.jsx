import "./Statistics.css";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      number: "10K+",
      title: "Happy Travelers",
    },
    {
      id: 2,
      number: "500+",
      title: "Destinations",
    },
    {
      id: 3,
      number: "150+",
      title: "Travel Partners",
    },
    {
      id: 4,
      number: "99%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">

        <div className="statistics-heading">
          <span>Our Achievements</span>

          <h2>TravelMate in Numbers</h2>

          <p>
            We are proud to help thousands of travelers
            explore the world every year.
          </p>
        </div>

        <div className="statistics-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <h2>{stat.number}</h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;