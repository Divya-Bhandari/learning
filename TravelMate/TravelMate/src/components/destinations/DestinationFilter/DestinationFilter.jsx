import { useState } from "react";
import "./DestinationFilter.css";

const DestinationFilter = ({ onFilterChange }) => {
  const [country, setCountry] = useState("All Countries");
  const [price, setPrice] = useState("Any Budget");
  const [duration, setDuration] = useState("Any Duration");

  const handleSearch = () => {
    onFilterChange({
      country,
      price,
      duration,
    });
  };

  const handleReset = () => {
    setCountry("All Countries");
    setPrice("Any Budget");
    setDuration("Any Duration");

    onFilterChange({
      country: "All Countries",
      price: "Any Budget",
      duration: "Any Duration",
    });
  };

  return (
    <section className="destination-filter-section">
      <div className="destination-filter-container">

        <div className="filter-group">
          <label>Country</label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>All Countries</option>
            <option>Nepal</option>
            <option>Indonesia</option>
            <option>France</option>
            <option>Switzerland</option>
            <option>Greece</option>
            <option>United Arab Emirates</option>
            <option>Maldives</option>
            <option>Japan</option>
            <option>United Kingdom</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price</label>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option>Any Budget</option>
            <option>Under $700</option>
            <option>$700 - $1000</option>
            <option>Above $1000</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Duration</label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>Any Duration</option>
            <option>1 - 5 Days</option>
            <option>6 - 7 Days</option>
            <option>8+ Days</option>
          </select>
        </div>

        <div className="filter-buttons">
          <button
            className="filter-search-button"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="filter-reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

      </div>
    </section>
  );
};

export default DestinationFilter;