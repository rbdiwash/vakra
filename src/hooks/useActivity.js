import { useQuery } from "@tanstack/react-query";
import { fetchRecentActivity } from "../services/activityApi";

export const ACTIVITY_QUERY_KEYS = {
  recent: ["activity", "recent"],
};

export const useRecentActivity = () => {
  return useQuery({
    queryKey: ACTIVITY_QUERY_KEYS.recent,
    queryFn: fetchRecentActivity,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchInterval: 1000 * 60 * 5, // Auto-refetch every 5 minutes
  });
};
