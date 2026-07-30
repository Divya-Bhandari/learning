import "./Blog.css";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    title: "Top 10 Beaches You Must Visit",
    description:
      "Discover the world's most beautiful beaches for your next vacation.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    title: "Essential Travel Tips for Beginners",
    description:
      "Everything you need to know before planning your first international trip.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    title: "Budget-Friendly Travel Destinations",
    description:
      "Explore amazing places around the world without spending a fortune.",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-title">
        <h2>Latest Travel Articles</h2>
        <p>Get inspired with our travel guides and tips.</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;