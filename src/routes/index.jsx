import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with regular layout */}
      <Route element={<Layout />}>
        <Route element={<PublicRoute />}>
          {publicRoutes
            .filter((route) => !route.restricted)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Route>

        <Route element={<PublicRoute restricted />}>
          {publicRoutes
            .filter((route) => route.restricted)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Route>
      </Route>

      {/* Protected Routes with dashboard layout (sidebar) */}
      <Route element={<DashboardLayout />}>
        <Route element={<ProtectedRoute />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>

      {/* 404 - Redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
