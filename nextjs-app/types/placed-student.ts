export interface PlacedStudent {
  id: number;
  student_id: string;
  certificate_id: string;
  student_name: string;
  student_image_url: string;
  company_name: string;
  student_role: string;
  student_bio: string;
  certificate_url: string;
  created_at?: string;
  updated_at?: string;
  is_active?: boolean;
}
