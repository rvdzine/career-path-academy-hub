import axios from 'axios';

// API Base URL - adjust based on your environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const BACKEND_BASE_URL = API_BASE_URL.replace('/api', '');

// Helper function to get full media URL
export const getMediaUrl = (path?: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${BACKEND_BASE_URL}${path}`;
};

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

// Vacancy API endpoints
export const vacancyApi = {
  // Public endpoints
  getVacancies: (params?: { status?: string; job_type?: string }) => 
    api.get('/vacancies/', { params }),
  
  getVacancyBySlug: (slug: string) => 
    api.get(`/vacancies/${slug}/`),
  
  // Admin endpoints (require authentication)
  createVacancy: (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      const value = data[key];
      // Only append non-null, non-undefined, and non-empty string values
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, value);
      }
    });
    return api.post('/vacancies/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  updateVacancy: (slug: string, data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      const value = data[key];
      // Only append non-null, non-undefined, and non-empty string values
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, value);
      }
    });
    return api.put(`/vacancies/${slug}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  deleteVacancy: (slug: string) => 
    api.delete(`/vacancies/${slug}/`),
  
  publishVacancy: (slug: string) => 
    api.post(`/vacancies/${slug}/publish/`),
  
  unpublishVacancy: (slug: string) => 
    api.post(`/vacancies/${slug}/unpublish/`),
  
  closeVacancy: (slug: string) => 
    api.post(`/vacancies/${slug}/close/`),
  
  getMyVacancies: () => 
    api.get('/vacancies/my_vacancies/'),
};

export default api;
