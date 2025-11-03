/**
 * Agent Logs Hooks
 *
 * Custom React Query hooks for fetching agent logs data from Vakra backend.
 * API Documentation: http://vakramvp.us-east-1.elasticbeanstalk.com:8080/swagger-ui/index.html
 */

import { useQuery } from "@tanstack/react-query";
import { fetchAgentLogs, readJsonFile } from "../services/agentLogsApi";

/**
 * Query Keys for Agent Logs
 */
export const AGENT_LOGS_QUERY_KEYS = {
  logs: ["agent-logs"],
  jsonFile: (filename) => ["agent-logs", "json", filename],
};

/**
 * Hook to fetch all agent logs
 *
 * @returns {Object} React Query result with agent logs data
 *
 * @example
 * const { data, isLoading, error } = useAgentLogs();
 */
export const useAgentLogs = () => {
  return useQuery({
    queryKey: AGENT_LOGS_QUERY_KEYS.logs,
    queryFn: fetchAgentLogs,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};

/**
 * Hook to read a specific JSON file from agent logs
 *
 * @param {string} filename - Name of the JSON file to read
 * @param {Object} options - Additional query options
 * @returns {Object} React Query result with JSON file data
 *
 * @example
 * const { data, isLoading, error } = useJsonFile('agent-log-2024.json');
 */
export const useJsonFile = (filename, options = {}) => {
  return useQuery({
    queryKey: AGENT_LOGS_QUERY_KEYS.jsonFile(filename),
    queryFn: () => readJsonFile(filename),
    enabled: !!filename, // Only fetch if filename is provided
    staleTime: 1000 * 60 * 5,
    retry: 1,
    ...options,
  });
};
