import { fetchDashboardDataFromLogs } from "./agentLogsApi";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://vakramvp.us-east-1.elasticbeanstalk.com:8080";

const apiClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
};

export const fetchDashboardStats = async () => {
  try {
    const data = await apiClient("/api/dashboard/stats");
    return data;
  } catch (error) {
    console.warn("Using fallback mock data for dashboard stats");
    return {
      totalApplications: {
        value: 147,
        change: 12,
        changeType: "increase",
        period: "last month",
      },
      complianceRate: {
        value: 93,
        change: 5,
        changeType: "increase",
        period: "last month",
      },
      criticalRisks: {
        value: 8,
        resolved: 3,
        period: "this week",
      },
      pendingReviews: {
        value: 23,
        status: "attention",
      },
    };
  }
};

export const fetchApplicationsByCategory = async () => {
  try {
    const data = await apiClient("/api/dashboard/applications/by-category");
    return data;
  } catch (error) {
    console.warn("Using fallback mock data for applications by category");
    return [
      { name: "Finance", value: 45, percentage: 30.6 },
      { name: "HR", value: 28, percentage: 19.0 },
      { name: "Sales", value: 33, percentage: 22.4 },
      { name: "IT", value: 19, percentage: 12.9 },
      { name: "Marketing", value: 22, percentage: 15.0 },
    ];
  }
};

export const fetchRiskDistribution = async () => {
  try {
    const data = await apiClient("/api/dashboard/risks/distribution");
    return data;
  } catch (error) {
    console.warn("Using fallback mock data for risk distribution");
    return [
      {
        name: "Low",
        value: 92,
        color: "#10b981",
        percentage: 62.6,
        description: "Applications with minimal risk",
      },
      {
        name: "Medium",
        value: 32,
        color: "#f59e0b",
        percentage: 21.8,
        description: "Applications requiring monitoring",
      },
      {
        name: "High",
        value: 15,
        color: "#f97316",
        percentage: 10.2,
        description: "Applications needing immediate review",
      },
      {
        name: "Critical",
        value: 8,
        color: "#ef4444",
        percentage: 5.4,
        description: "Applications requiring urgent action",
      },
    ];
  }
};

export const fetchAllDashboardData = async () => {
  try {
    const data = await apiClient("/api/dashboard/all");
    return {
      ...data,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Dashboard API not available, trying agent logs endpoint");

    try {
      const logsData = await fetchDashboardDataFromLogs();
      return logsData;
    } catch (logsError) {
      console.warn("Using fallback mock data for all dashboard data");
      const [stats, categories, risks] = await Promise.all([
        fetchDashboardStats(),
        fetchApplicationsByCategory(),
        fetchRiskDistribution(),
      ]);

      return {
        stats,
        categories,
        risks,
        lastUpdated: new Date().toISOString(),
      };
    }
  }
};

export const checkApiHealth = async () => {
  try {
    const data = await apiClient("/actuator/health");
    return { status: "connected", ...data };
  } catch (error) {
    return { status: "disconnected", error: error.message };
  }
};
