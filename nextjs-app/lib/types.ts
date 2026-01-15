export interface Author {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_description: string;
  meta_keywords?: string;
  featured_image: string;
  author: Author;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
  published_at?: string;
  is_featured: boolean;
  views_count: number;
}

export interface BlogListItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: Author;
  status: 'draft' | 'published';
  published_at?: string;
  is_featured: boolean;
  views_count: number;
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  meta_description: string;
  meta_keywords?: string;
  featured_image: string;
  status: 'draft' | 'published';
  is_featured: boolean;
}

// Vacancy Types
export interface Vacancy {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  job_type: 'remote' | 'on-site' | 'hybrid';
  stipend: string;
  job_description_header: string;
  job_description_body?: string;
  job_description_file?: string;
  requirements: string;
  skills: string;
  status: 'draft' | 'published' | 'closed';
  created_at: string;
  updated_at: string;
  published_at?: string;
  views_count: number;
  applications_count: number;
  skills_list: string[];
  requirements_list: string[];
  created_by_name?: string;
}

export interface VacancyListItem {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  job_type: 'remote' | 'on-site' | 'hybrid';
  stipend: string;
  status: 'draft' | 'published' | 'closed';
  created_at: string;
  published_at?: string;
  views_count: number;
  applications_count: number;
  skills_list: string[];
  requirements_list: string[];
  created_by_name?: string;
  job_description_header: string;
  job_description_body?: string;
  job_description_file?: string;
}

export interface VacancyFormData {
  title: string;
  company: string;
  location: string;
  job_type: 'remote' | 'on-site' | 'hybrid';
  stipend: string;
  job_description_header: string;
  job_description_body?: string;
  job_description_file?: File | null;
  requirements: string;
  skills: string;
  status: 'draft' | 'published';
}
