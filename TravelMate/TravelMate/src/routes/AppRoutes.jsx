import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";
import Register from "../pages/Register";

import DestinationDetails from "../components/destinations/DestinationDetails/DestinationDetails";
import Booking from "../components/booking/Booking";

import BookingDetails from "../pages/BookingDetails/BookingDetails";

import ProtectedRoute from "../components/auth/ProtectedRoute";

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

      {/* Booking */}
      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        }
      />

      {/* My Bookings */}
      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />

      {/* Booking Details */}
      <Route
        path="/booking-details/:id"
        element={
          <ProtectedRoute>
            <BookingDetails />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;