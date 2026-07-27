import "./SearchSection.css";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <h2>Search Your Next Adventure</h2>

        <form className="search-form">
          <input type="text" placeholder="Where are you going?" />

          <input type="date" />

          <input type="date" />

          <select>
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
            <option>4 Travelers</option>
          </select>

          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;