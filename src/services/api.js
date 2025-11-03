// Base API configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com";

// Generic fetch wrapper with error handling
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
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
    console.error("API fetch error:", error);
    throw error;
  }
}

// API endpoints
export const api = {
  // Users
  getUsers: () => fetchAPI("/users"),
  getUser: (id) => fetchAPI(`/users/${id}`),

  // Posts
  getPosts: () => fetchAPI("/posts"),
  getPost: (id) => fetchAPI(`/posts/${id}`),
  getUserPosts: (userId) => fetchAPI(`/posts?userId=${userId}`),

  // Comments
  getComments: (postId) => fetchAPI(`/posts/${postId}/comments`),

  // Todos
  getTodos: () => fetchAPI("/todos"),
  getUserTodos: (userId) => fetchAPI(`/todos?userId=${userId}`),
};
