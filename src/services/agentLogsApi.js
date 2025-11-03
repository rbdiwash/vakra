const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://vakramvp.us-east-1.elasticbeanstalk.com:8080";

export const fetchAgentLogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/agent-logs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching agent logs:", error);
    throw error;
  }
};

export const readJsonFile = async (filename) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/agent-logs/read-json?filename=${encodeURIComponent(
        filename
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
};

export const fetchDashboardDataFromLogs = async () => {
  try {
    const logs = await fetchAgentLogs();

    const processedData = {
      stats: {
        totalApplications: {
          value: logs?.totalApplications || 0,
          change: logs?.change || 0,
          changeType: "increase",
          period: "last month",
        },
        complianceRate: {
          value: logs?.complianceRate || 0,
          change: logs?.complianceChange || 0,
          changeType: "increase",
          period: "last month",
        },
        criticalRisks: {
          value: logs?.criticalRisks || 0,
          resolved: logs?.resolvedRisks || 0,
          period: "this week",
        },
        pendingReviews: {
          value: logs?.pendingReviews || 0,
          status: "attention",
        },
      },
      categories: logs?.categories || [],
      risks: logs?.riskDistribution || [],
      lastUpdated: new Date().toISOString(),
    };

    return processedData;
  } catch (error) {
    console.error("Error fetching dashboard data from logs:", error);
    throw error;
  }
};
