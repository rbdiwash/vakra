import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Get page title based on route
  const getPageInfo = () => {
    const path = location.pathname;
    const pages = {
      "/dashboard": {
        title: "Governance Dashboard",
        subtitle: "Overview of your enterprise application landscape",
      },
      "/applications": {
        title: "Applications",
        subtitle: "Manage your enterprise applications",
      },
      "/compliance": {
        title: "Compliance",
        subtitle: "Monitor compliance across your organization",
      },
      "/risk-assessment": {
        title: "Risk Assessment",
        subtitle: "Identify and mitigate risks in your applications",
      },
      "/audit-logs": {
        title: "Audit Logs",
        subtitle: "View complete audit trails for all activities",
      },
      "/settings": {
        title: "Settings",
        subtitle: "Configure your application settings",
      },
      "/profile": {
        title: "Profile",
        subtitle: "Manage your account settings",
      },
    };
    return pages[path] || { title: "Dashboard", subtitle: "" };
  };

  const pageInfo = getPageInfo();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          {/* Page Title */}
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {pageInfo.title}
            </h1>
            {pageInfo.subtitle && (
              <p className="text-xs text-gray-600">{pageInfo.subtitle}</p>
            )}
          </div>

          {/* Right Side: Profile & Logout */}
          <div className="flex items-center gap-4">
            {/* User Info */}
            <Link
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-semibold text-sm">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
