import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <span className="not-found-label">
          TravelMate
        </span>

        <div className="not-found-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for does not
          exist or may have been moved.
        </p>

        <Link
          to="/"
          className="not-found-button"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;