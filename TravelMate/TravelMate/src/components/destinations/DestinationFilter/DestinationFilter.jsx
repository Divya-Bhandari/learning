import "./DestinationFilter.css";

const DestinationFilter = () => {
  return (
    <section className="destination-filter">
      <div className="destination-filter-container">

        <div className="filter-box">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search destinations..."
          />
        </div>

        <div className="filter-box">
          <label>Country</label>
          <select>
            <option>All Countries</option>
            <option>Nepal</option>
            <option>Indonesia</option>
            <option>France</option>
            <option>Switzerland</option>
          </select>
        </div>

        <div className="filter-box">
          <label>Price</label>
          <select>
            <option>Any Budget</option>
            <option>Under $500</option>
            <option>$500 - $1000</option>
            <option>Above $1000</option>
          </select>
        </div>

        <div className="filter-box">
          <label>Duration</label>
          <select>
            <option>Any Duration</option>
            <option>1 - 3 Days</option>
            <option>4 - 7 Days</option>
            <option>8+ Days</option>
          </select>
        </div>

        <button className="filter-btn">
          Search
        </button>

      </div>
    </section>
  );
};

export default DestinationFilter;