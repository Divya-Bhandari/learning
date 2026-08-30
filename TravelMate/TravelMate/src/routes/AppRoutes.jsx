import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import Contact from "../pages/Contact";
import MyBookings from "../pages/MyBookings";

import DestinationDetails from "../components/destinations/DestinationDetails/DestinationDetails";
import Booking from "../components/booking/Booking";

import BookingDetails from "../pages/BookingDetails/BookingDetails";

import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* About */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* Destinations */}
      <Route
        path="/destinations"
        element={<Destinations />}
      />

      {/* Destination Details */}
      <Route
        path="/destinations/:id"
        element={<DestinationDetails />}
      />

      {/* Booking */}
      <Route
        path="/booking/:id"
        element={<Booking />}
      />

      {/* My Bookings */}
      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

      {/* Booking Details */}
      <Route
        path="/booking-details/:id"
        element={<BookingDetails />}
      />

      {/* Contact */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
};

export default AppRoutes;