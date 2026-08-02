import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={<h1 style={{ padding: "40px" }}>About Page</h1>}
      />

      <Route
        path="/destinations"
        element={<h1 style={{ padding: "40px" }}>Destinations Page</h1>}
      />

      <Route
        path="/contact"
        element={<h1 style={{ padding: "40px" }}>Contact Page</h1>}
      />

    </Routes>
  );
};

export default AppRoutes;