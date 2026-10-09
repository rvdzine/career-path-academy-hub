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

// Canonical Public Site URL - configured via env, fallback to official domain
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://idigitalstudies.com').replace(/\/$/, '');

// Helper function to get full official verification URL
export const getVerificationUrl = (identifier?: string | null) => {
  if (!identifier) return `${SITE_URL}/verify-certificate`;
  return `${SITE_URL}/verify-certificate/${encodeURIComponent(identifier).replace(/%2F/g, '/')}`;
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

// Student Enrollment & Certificate API endpoints
export const studentApi = {
  getStudents: (params?: { q?: string; course_mode?: string; certificate_status?: string; skip?: number; limit?: number }) =>
    api.get('/students/', { params }),

  getStudentById: (studentId: string) =>
    api.get(`/students/${studentId}/`),

  getStats: () =>
    api.get('/students/stats/'),

  enrollStudent: (data: {
    name: string;
    email: string;
    phone: string;
    location: string;
    course_mode: string;
    course_name: string;
    course_code?: string;
  }) => api.post('/students/enroll/', data),

  issueCertificate: (studentId: string, data: { course_completion_date: string; duration?: string; certificate_url?: string }) =>
    api.post(`/students/${studentId}/issue-certificate/`, data),

  verifyCertificate: (identifier: string) =>
    api.get(`/students/verify/${identifier}/`),

  getCertificateImageUrl: (identifier: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    return `${baseUrl}/students/${identifier}/certificate-image/`;
  },

  getCertificateDownloadUrl: (studentId: string, format: 'png' | 'pdf' = 'png') => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    return `${baseUrl}/students/${studentId}/download-certificate/?format=${format}`;
  },

  sendCertificateEmail: (studentId: string) =>
    api.post(`/students/${studentId}/send-certificate-email/`),

  deleteStudent: (studentId: string) =>
    api.delete(`/students/${studentId}/`),
};

export default api;
