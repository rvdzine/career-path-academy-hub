import axios from 'axios';

// API Base URL - adjust based on your environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Blog API endpoints
export const blogApi = {
  // Public endpoints
  getBlogs: (params?: { status?: string; is_featured?: boolean }) => 
    api.get('/blogs/', { params }),
  
  getBlogBySlug: (slug: string) => 
    api.get(`/blogs/${slug}/`),
  
  // Admin endpoints (require authentication)
  createBlog: (data: any) => 
    api.post('/blogs/', data),
  
  updateBlog: (slug: string, data: any) => 
    api.put(`/blogs/${slug}/`, data),
  
  deleteBlog: (slug: string) => 
    api.delete(`/blogs/${slug}/`),
  
  publishBlog: (slug: string) => 
    api.post(`/blogs/${slug}/publish/`),
  
  unpublishBlog: (slug: string) => 
    api.post(`/blogs/${slug}/unpublish/`),
  
  getMyBlogs: () => 
    api.get('/blogs/my_blogs/'),
  
  // Image upload
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/blogs/upload_image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

// Auth API
export const authApi = {
  login: async (username: string, password: string) => {
    const response = await api.post('/auth/login/', { username, password });
    const { access, refresh } = response.data;
    localStorage.setItem('auth_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('user', JSON.stringify({ username }));
    return response;
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('auth_token');
  },
};

export default api;
