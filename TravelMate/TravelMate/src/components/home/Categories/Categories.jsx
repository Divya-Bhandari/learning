import categoryData from "./CategoryData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="categories">
      {categoryData.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </section>
  );
};

export default Categories;