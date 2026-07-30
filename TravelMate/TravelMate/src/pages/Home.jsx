import Hero from "../components/home/Hero/Hero";
import SearchSection from "../components/home/SearchSection/SearchSection";
import PopularDestinations from "../components/home/PopularDestinations/PopularDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";
import FeaturedTours from "../components/home/FeaturedTours/FeaturedTours";


const Home = () => {
  return (
    <>
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <WhyChooseUs />
      <FeaturedTours />
    </>
  );
};


export default Home;