import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import MyBookings from "../pages/MyBookings";

import DestinationDetails from "../components/destinations/DestinationDetails/DestinationDetails";
import Booking from "../components/booking/Booking";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/destinations"
        element={<Destinations />}
      />

      <Route
        path="/destinations/:id"
        element={<DestinationDetails />}
      />

      <Route
        path="/booking/:id"
        element={<Booking />}
      />

      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

    </Routes>
  );
};

export default AppRoutes;