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
