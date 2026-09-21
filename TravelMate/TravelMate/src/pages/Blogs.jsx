import "./Blog.css";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "10 Beautiful Places to Visit in Nepal",
      description:
        "Discover breathtaking destinations, peaceful landscapes, and unforgettable experiences across Nepal.",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900",
    },
    {
      id: 2,
      title: "How to Plan Your Perfect Trip",
      description:
        "Simple travel planning tips to help you organize your journey without unnecessary stress.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900",
    },
    {
      id: 3,
      title: "Travel Essentials You Should Pack",
      description:
        "A practical guide to the important things you should carry for a comfortable trip.",
      image:
        "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=900",
    },
  ];

  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <span>Travel Journal</span>

          <h2>Latest Travel Articles</h2>

          <p>
            Helpful travel guides, tips, and inspiration for your next
            adventure.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.id}>
              <div className="blog-card-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="blog-card-content">
                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <a href="#" className="blog-card-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;