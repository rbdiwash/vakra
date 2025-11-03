# Vakra API Integration Guide

This document provides detailed information about integrating with the Vakra backend API.

## Base URL

```
Production: http://vakramvp.us-east-1.elasticbeanstalk.com:8080
Development: Set via VITE_API_BASE_URL environment variable
```

## API Documentation

Full API documentation available at:
**[Swagger UI](http://vakramvp.us-east-1.elasticbeanstalk.com:8080/swagger-ui/index.html)**

## Environment Setup

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://vakramvp.us-east-1.elasticbeanstalk.com:8080
VITE_APP_NAME=Vakra
```

## Available Endpoints

### Agent Logs

#### 1. Get All Agent Logs

```
GET /api/agent-logs
```

**React Query Hook:**

```javascript
import { useAgentLogs } from "../hooks/useAgentLogs";

function Component() {
  const { data, isLoading, error } = useAgentLogs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Render logs data */}</div>;
}
```

#### 2. Read JSON File

```
GET /api/agent-logs/read-json?filename={filename}
```

**React Query Hook:**

```javascript
import { useJsonFile } from "../hooks/useAgentLogs";

function Component() {
  const { data, isLoading, error } = useJsonFile("agent-log-2024.json");

  return <div>{/* Render JSON data */}</div>;
}
```

### Dashboard Data

#### 1. Get Dashboard Statistics

```
GET /api/dashboard/stats
```

#### 2. Get Applications by Category

```
GET /api/dashboard/applications/by-category
```

#### 3. Get Risk Distribution

```
GET /api/dashboard/risks/distribution
```

#### 4. Get All Dashboard Data

```
GET /api/dashboard/all
```

**React Query Hook:**

```javascript
import { useAllDashboardData } from "../hooks/useDashboard";

function Dashboard() {
  const { data, isLoading, error, isRefetching } = useAllDashboardData();

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorDisplay error={error} />;

  const { stats, categories, risks } = data;

  return <div>{/* Render dashboard with real data */}</div>;
}
```

## API Service Layer

### Location: `src/services/`

**Files:**

- `agentLogsApi.js` - Agent logs specific endpoints
- `dashboardApi.js` - Dashboard data endpoints
- `api.js` - Generic API utilities (existing)

### Example Usage:

```javascript
import { fetchAgentLogs } from "../services/agentLogsApi";

async function getData() {
  try {
    const logs = await fetchAgentLogs();
    console.log(logs);
  } catch (error) {
    console.error("Failed to fetch logs:", error);
  }
}
```

## React Query Integration

### Configuration: `src/config/queryClient.js`

Default settings:

- **Stale Time:** 5 minutes (data considered fresh)
- **Cache Time:** 10 minutes (data kept in cache)
- **Retry:** 1-2 attempts on failure
- **Refetch on Window Focus:** Disabled

### Custom Hooks: `src/hooks/`

- `useDashboard.js` - Dashboard data hooks
- `useAgentLogs.js` - Agent logs hooks
- `useUsers.js` - User data hooks
- `usePosts.js` - Posts data hooks

## Error Handling

All API calls include:

1. **Try-Catch blocks** for error handling
2. **Fallback data** for development
3. **Error logging** to console
4. **User-friendly error messages** in UI

### Example Error Component:

```javascript
const ErrorDisplay = ({ error }) => (
  <div className="bg-red-50 border border-red-200 rounded-xl p-8">
    <h3>Failed to Load Data</h3>
    <p>{error.message}</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </div>
);
```

## Loading States

All data fetching includes loading states:

```javascript
if (isLoading) return <LoadingSkeleton />;
if (isRefetching) return <RefetchingIndicator />;
```

## Data Flow

```
Component
    ↓
React Query Hook (useDashboard, useAgentLogs)
    ↓
API Service (dashboardApi, agentLogsApi)
    ↓
Backend API (vakramvp.us-east-1.elasticbeanstalk.com:8080)
    ↓
Response processed & cached by React Query
    ↓
Component re-renders with data
```

## CORS Configuration

If you encounter CORS issues, ensure the backend allows:

```
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Production Deployment

1. Update `.env.production`:

```env
VITE_API_BASE_URL=http://vakramvp.us-east-1.elasticbeanstalk.com:8080
```

2. Build the application:

```bash
yarn build
```

3. The built files will use the production API URL

## Testing API Connection

Use the health check endpoint:

```javascript
import { checkApiHealth } from "../services/dashboardApi";

async function testConnection() {
  const health = await checkApiHealth();
  console.log("API Status:", health.status);
}
```

## Troubleshooting

### API not responding

1. Check network connection
2. Verify API URL in `.env`
3. Check browser console for errors
4. Verify backend is running

### CORS errors

1. Check backend CORS configuration
2. Use proxy in development (vite.config.js)
3. Ensure correct headers

### Data not updating

1. Check React Query cache settings
2. Force refetch: `refetch()`
3. Clear cache: `queryClient.clear()`

## Additional Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [Vakra API Swagger](http://vakramvp.us-east-1.elasticbeanstalk.com:8080/swagger-ui/index.html)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
