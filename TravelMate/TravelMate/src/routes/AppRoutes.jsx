import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import Contact from "../pages/Contact";
import MyBookings from "../pages/MyBookings";
import BookingDetails from "../pages/BookingDetails/BookingDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Destination
import DestinationDetails from "../components/destinations/DestinationDetails/DestinationDetails";

// Booking
import Booking from "../components/booking/Booking";
import BookingSuccess from "../components/booking/BookingSuccess";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ==================== HOME ==================== */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* ==================== ABOUT ==================== */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* ==================== DESTINATIONS ==================== */}
      <Route
        path="/destinations"
        element={<Destinations />}
      />

      {/* Destination Details */}
      <Route
        path="/destinations/:id"
        element={<DestinationDetails />}
      />

      {/* ==================== BOOKING ==================== */}
      <Route
        path="/booking/:id"
        element={<Booking />}
      />

      {/* Booking Success */}
      <Route
        path="/booking-success"
        element={<BookingSuccess />}
      />

      {/* ==================== MY BOOKINGS ==================== */}
      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

      {/* Booking Details */}
      <Route
        path="/booking-details/:id"
        element={<BookingDetails />}
      />

      {/* ==================== CONTACT ==================== */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ==================== AUTHENTICATION ==================== */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
};

export default AppRoutes;