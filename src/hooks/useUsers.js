import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: api.getUsers,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useUser = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => api.getUser(userId),
    enabled: !!userId, // Only fetch if userId is provided
  });
};

