import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: api.getPosts,
  });
};

export const usePost = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => api.getPost(postId),
    enabled: !!postId,
  });
};

export const useUserPosts = (userId) => {
  return useQuery({
    queryKey: ['posts', 'user', userId],
    queryFn: () => api.getUserPosts(userId),
    enabled: !!userId,
  });
};

