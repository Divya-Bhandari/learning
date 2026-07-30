const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <h3>{category.title}</h3>
      <p>{category.tours}</p>
    </div>
  );
};

export default CategoryCard;