import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./DestinationFilter.css";

const DestinationFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const handleSearch = (e) => {
    e.preventDefault();

    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (category !== "All") {
      params.category = category;
    }

    setSearchParams(params);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);

    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (selectedCategory !== "All") {
      params.category = selectedCategory;
    }

    setSearchParams(params);
  };

  const handleClear = () => {
    setSearch("");
    setCategory("All");
    setSearchParams({});
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
            <label htmlFor="destination-search">
              Search
            </label>

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
              onChange={handleCategoryChange}
            >
              <option value="All">All Destinations</option>
              <option value="Nature">Nature</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="City">City</option>
            </select>
          </div>

          <button
            type="submit"
            className="destination-filter-button"
          >
            Search
          </button>

          {(search || category !== "All") && (
            <button
              type="button"
              className="destination-clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default DestinationFilter;