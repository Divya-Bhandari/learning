import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../components/destinations/DestinationDetails/DestinationDetails";
import Booking from "../components/booking/Booking/Booking";

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
        path="/destinations/:id"
        element={<DestinationDetails />}
      />

      {/* Booking Route */}
      <Route
        path="/booking/:id"
        element={<Booking />}
      />

      <Route
        path="/contact"
        element={<h1 style={{ padding: "40px" }}>Contact Page</h1>}
      />
    </Routes>
  );
};

export default AppRoutes;