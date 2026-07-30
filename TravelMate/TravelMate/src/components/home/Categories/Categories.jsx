import "./Categories.css";

const categories = [
  {
    id: 1,
    icon: "🏔️",
    title: "Adventure",
    description: "Mountain climbing, trekking and hiking adventures."
  },
  {
    id: 2,
    icon: "🏖️",
    title: "Beach",
    description: "Relax on beautiful beaches around the world."
  },
  {
    id: 3,
    icon: "🏙️",
    title: "City Tours",
    description: "Discover famous cities and cultural landmarks."
  },
  {
    id: 4,
    icon: "🏕️",
    title: "Camping",
    description: "Experience nature with exciting camping trips."
  },
  {
    id: 5,
    icon: "🍽️",
    title: "Food & Culture",
    description: "Taste local cuisine and explore traditions."
  },
  {
    id: 6,
    icon: "🚢",
    title: "Cruises",
    description: "Luxury cruise vacations across stunning oceans."
  }
];

const Categories = () => {
  return (
    <section className="categories">

      <div className="section-title">
        <h2>Explore Categories</h2>
        <p>Choose your favorite way to travel</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Categories;