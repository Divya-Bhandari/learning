import { useState } from "react";
import "./DestinationFilter.css";

const DestinationFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log({
      search,
      category,
    });
  };

  return (
    <section className="destination-filter">
      <div className="destination-filter-container">
        <div className="destination-filter-header">
          <div>
            <span>Find your place</span>
            <h2>Explore Destinations</h2>
          </div>

          <p>
            Search and filter destinations to find a place that
            matches your travel plans.
          </p>
        </div>

        <form
          className="destination-filter-form"
          onSubmit={handleSearch}
        >
          <div className="destination-filter-field search-field">
            <label htmlFor="destination-search">Search</label>

            <input
              id="destination-search"
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="destination-filter-field">
            <label htmlFor="destination-category">
              Category
            </label>

            <select
              id="destination-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Destinations</option>
              <option value="Nature">Nature</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="City">City</option>
            </select>
          </div>

          <button type="submit" className="destination-filter-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default DestinationFilter;