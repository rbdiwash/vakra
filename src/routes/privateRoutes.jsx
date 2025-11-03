// Private Pages
import Dashboard from "../pages/private/Dashboard";
import Profile from "../pages/private/Profile";
import Applications from "../pages/private/Applications";
import Compliance from "../pages/private/Compliance";
import RiskAssessment from "../pages/private/RiskAssessment";
import AuditLogs from "../pages/private/AuditLogs";
import Settings from "../pages/private/Settings";

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/applications",
    element: <Applications />,
  },
  {
    path: "/compliance",
    element: <Compliance />,
  },
  {
    path: "/risk-assessment",
    element: <RiskAssessment />,
  },
  {
    path: "/audit-logs",
    element: <AuditLogs />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];
