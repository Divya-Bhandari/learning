import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>TravelMate</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;