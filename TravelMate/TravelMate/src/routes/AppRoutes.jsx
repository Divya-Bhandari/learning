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

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
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

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/booking/:id"
          element={<Booking />}
        />

        <Route
          path="/booking-success"
          element={<BookingSuccess />}
        />

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        <Route
          path="/booking-details/:id"
          element={<BookingDetails />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;