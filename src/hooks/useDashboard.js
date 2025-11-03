/**
 * Dashboard Data Hooks
 *
 * Custom React Query hooks for fetching and managing dashboard data.
 * These hooks provide automatic caching, background updates, and error handling.
 */

import { useQuery } from "@tanstack/react-query";
import {
  fetchDashboardStats,
  fetchApplicationsByCategory,
  fetchRiskDistribution,
  fetchAllDashboardData,
} from "../services/dashboardApi";

/**
 * Query Keys for Dashboard
 * Centralized query keys for consistent cache management
 */
export const DASHBOARD_QUERY_KEYS = {
  stats: ["dashboard", "stats"],
  categories: ["dashboard", "categories"],
  risks: ["dashboard", "risks"],
  all: ["dashboard", "all"],
};

/**
 * Hook to fetch dashboard statistics
 *
 * @returns {Object} React Query result with stats data, loading state, and error
 *
 * @example
 * const { data, isLoading, error } = useDashboardStats();
 */
export const useDashboardStats = () => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.stats,
    queryFn: fetchDashboardStats,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // Auto-refetch every 10 minutes
  });
};

/**
 * Hook to fetch applications by category data
 *
 * @returns {Object} React Query result with category data, loading state, and error
 *
 * @example
 * const { data, isLoading, error } = useApplicationsByCategory();
 */
export const useApplicationsByCategory = () => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.categories,
    queryFn: fetchApplicationsByCategory,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to fetch risk distribution data
 *
 * @returns {Object} React Query result with risk data, loading state, and error
 *
 * @example
 * const { data, isLoading, error } = useRiskDistribution();
 */
export const useRiskDistribution = () => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.risks,
    queryFn: fetchRiskDistribution,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to fetch all dashboard data at once
 * Useful for initial page load to minimize sequential requests
 *
 * @returns {Object} React Query result with all dashboard data, loading state, and error
 *
 * @example
 * const { data, isLoading, error } = useAllDashboardData();
 * // data structure:
 * // {
 * //   stats: {...},
 * //   categories: [...],
 * //   risks: [...],
 * //   lastUpdated: ISO timestamp
 * // }
 */
export const useAllDashboardData = () => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.all,
    queryFn: fetchAllDashboardData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // Auto-refetch every 10 minutes
  });
};
