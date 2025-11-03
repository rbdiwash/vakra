import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ restricted = false }) => {
  const { isAuthenticated } = useAuth();

  // If route is restricted (like login/register) and user is authenticated, redirect to dashboard
  if (restricted && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
