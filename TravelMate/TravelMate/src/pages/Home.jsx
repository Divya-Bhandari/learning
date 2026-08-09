import Hero from "../components/home/Hero/Hero";
import SearchSection from "../components/home/SearchSection/SearchSection";
import PopularDestinations from "../components/home/PopularDestinations/PopularDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";
import FeaturedTours from "../components/home/FeaturedTours/FeaturedTours";
import Categories from "../components/home/Categories/Categories";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Newsletter from "../components/home/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <WhyChooseUs />
      <FeaturedTours />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;