import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/destinations"
        element={<Destinations />}
      />

      <Route
        path="/contact"
        element={<h1 style={{ padding: "40px" }}>Contact Page</h1>}
      />
    </Routes>
  );
};

export default AppRoutes;