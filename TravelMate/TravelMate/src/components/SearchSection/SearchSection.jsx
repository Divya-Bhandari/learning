import "./SearchSection.css";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-container">

        <div className="search-box">
          <label>Destination</label>
          <input 
            type="text" 
            placeholder="Where are you going?"
          />
        </div>

        <div className="search-box">
          <label>Check In</label>
          <input type="date" />
        </div>

        <div className="search-box">
          <label>Check Out</label>
          <input type="date" />
        </div>

        <div className="search-box">
          <label>Guests</label>
          <input 
            type="number" 
            placeholder="Number of guests"
          />
        </div>

        <button className="search-btn">
          Search
        </button>

      </div>
    </section>
  );
};

export default SearchSection;