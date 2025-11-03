const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://vakramvp.us-east-1.elasticbeanstalk.com:8080";

export const fetchRecentActivity = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/activity/recent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn("Using fallback mock data for recent activity");
    // Fallback mock data
    return [
      {
        id: 1,
        application: "Salesforce CRM",
        action: "Policy Updated",
        status: "success",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      },
      {
        id: 2,
        application: "Slack Enterprise",
        action: "Access Review",
        status: "warning",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
      },
      {
        id: 3,
        application: "GitHub Enterprise",
        action: "Compliance Check",
        status: "success",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      },
      {
        id: 4,
        application: "Jira Cloud",
        action: "Risk Assessment",
        status: "error",
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
      },
      {
        id: 5,
        application: "Microsoft 365",
        action: "License Renewal",
        status: "info",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      },
    ];
  }
};
