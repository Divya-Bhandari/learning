import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const loggedIn = localStorage.getItem("travelmateLoggedIn");

  return loggedIn === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;