/**
 * Governance Dashboard Component
 *
 * Main dashboard displaying enterprise application governance metrics,
 * including statistics, application categories, and risk distribution.
 *
 * Data is fetched using React Query hooks for optimal caching and performance.
 */

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAllDashboardData } from "../../hooks/useDashboard";

const Dashboard = () => {
  // Fetch all dashboard data using React Query
  const { data, isLoading, error, isRefetching } = useAllDashboardData();

  // Loading State
  if (isLoading) {
    return (
      <div className="p-8">
        <LoadingSkeleton />
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="p-8">
        <ErrorDisplay error={error} />
      </div>
    );
  }

  // Extract data from React Query result
  const { stats, categories, risks } = data;

  return (
    <div className="p-8">
      {/* Refetching Indicator */}
      {isRefetching && (
        <div className="mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-2 text-sm text-blue-700">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Updating dashboard data...
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Applications"
          value={stats.totalApplications.value}
          change={`+${stats.totalApplications.change}% from ${stats.totalApplications.period}`}
          changeType="positive"
          icon={<ApplicationsIcon />}
        />
        <StatCard
          title="Compliance Rate"
          value={`${stats.complianceRate.value}%`}
          change={`+${stats.complianceRate.change}% from ${stats.complianceRate.period}`}
          changeType="positive"
          icon={<ComplianceIcon />}
        />
        <StatCard
          title="Critical Risks"
          value={stats.criticalRisks.value}
          change={`${stats.criticalRisks.resolved} resolved ${stats.criticalRisks.period}`}
          changeType="positive"
          icon={<RiskIcon />}
        />
        <StatCard
          title="Pending Reviews"
          value={stats.pendingReviews.value}
          change="Requires attention"
          changeType="warning"
          icon={<ReviewIcon />}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications by Category Chart */}
        <ChartCard
          title="Applications by Category"
          subtitle="Distribution across different app categories"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categories}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Risk Distribution Chart */}
        <ChartCard
          title="Risk Distribution"
          subtitle="Current risk levels across applications"
        >
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="60%" height={300}>
              <PieChart>
                <Pie
                  data={risks}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {risks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3">
              {risks.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}:</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

// ============================================================================
// Subcomponents
// ============================================================================

/**
 * Stat Card Component
 * Displays a single statistic with icon, value, and change indicator
 */
const StatCard = ({ title, value, change, changeType, icon }) => {
  const changeColors = {
    positive: "text-green-600",
    warning: "text-orange-600",
    negative: "text-red-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="mb-2">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`text-sm font-medium ${changeColors[changeType]}`}>
        {changeType === "positive" && "↑ "}
        {change}
      </div>
    </div>
  );
};

/**
 * Chart Card Component
 * Wrapper for chart components with title and subtitle
 */
const ChartCard = ({ title, subtitle, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6">
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
    {children}
  </div>
);

/**
 * Loading Skeleton
 * Displayed while data is being fetched
 */
const LoadingSkeleton = () => (
  <div className="space-y-8 animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl p-6 h-32"
        ></div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl p-6 h-96"
        ></div>
      ))}
    </div>
  </div>
);

/**
 * Error Display Component
 * Shown when data fetching fails
 */
const ErrorDisplay = ({ error }) => (
  <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
    <svg
      className="w-16 h-16 text-red-400 mx-auto mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h3 className="text-xl font-semibold text-red-900 mb-2">
      Failed to Load Dashboard Data
    </h3>
    <p className="text-red-700 mb-4">{error.message}</p>
    <button
      onClick={() => window.location.reload()}
      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      Retry
    </button>
  </div>
);

// ============================================================================
// Icon Components
// ============================================================================

const ApplicationsIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const ComplianceIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const RiskIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const ReviewIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default Dashboard;
