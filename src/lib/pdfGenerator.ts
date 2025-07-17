
import jsPDF from 'jspdf';

export const generatePRDPdf = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const lineHeight = 7;
  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont("helvetica", "bold");
    } else {
      doc.setFont("helvetica", "normal");
    }
    
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    lines.forEach((line: string) => {
      if (yPosition > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
    yPosition += 3; // Extra spacing after text blocks
  };

  // Helper function to add a section header
  const addSection = (title: string, fontSize: number = 16) => {
    yPosition += 5;
    addText(title, fontSize, true);
    yPosition += 3;
  };

  // Document content
  addText("Product Requirements Document (PRD)", 20, true);
  addText("Institute of Digital Studies - Digital Marketing Academy Website", 16, true);
  addText("Version: 1.0 | Date: January 2025 | Document Owner: Product Team", 12);
  yPosition += 10;

  addSection("1. Project Overview", 16);
  
  addText("1.1 Project Vision", 14, true);
  addText("Create a comprehensive digital marketing academy website that serves as the primary platform for course enrollment, student engagement, and business operations for the Institute of Digital Studies.");
  
  addText("1.2 Project Objectives", 14, true);
  addText("• Establish online presence for digital marketing course offerings");
  addText("• Enable seamless course enrollment and payment processing");
  addText("• Provide comprehensive information about courses, placement, and company");
  addText("• Create engagement platforms for events, webinars, and community");
  addText("• Support both online and offline learning experiences");

  addText("1.3 Target Audience", 14, true);
  addText("• Primary: Students and working professionals seeking digital marketing skills");
  addText("• Secondary: Corporate recruiters looking for trained professionals");
  addText("• Tertiary: Partners and affiliates in the digital marketing ecosystem");

  addSection("2. Technical Architecture", 16);
  
  addText("2.1 Frontend Technology Stack", 14, true);
  addText("• Framework: React 18 with TypeScript");
  addText("• Build Tool: Vite");
  addText("• Styling: Tailwind CSS with shadcn/ui components");
  addText("• Routing: React Router DOM v6");
  addText("• State Management: Tanstack React Query");
  addText("• HTTP Client: Axios");
  addText("• Payment Integration: Razorpay");
  addText("• UI Components: Radix UI primitives with custom theming");

  addText("2.2 Backend Technology Stack", 14, true);
  addText("• Framework: Django REST Framework");
  addText("• Database: SQLite (development), PostgreSQL (production recommended)");
  addText("• API Architecture: RESTful APIs");
  addText("• Authentication: Django session-based (expandable to JWT)");

  addSection("3. Core Features & Functionality", 16);
  
  addText("3.1 Main Navigation", 14, true);
  addText("• Home: Landing page with hero section");
  addText("• Courses: Course catalog and details");
  addText("• Placement: Job placement information and success stories");
  addText("• About: Company information and team details");
  addText("• Contact: Contact forms and location information");
  addText("• Offline Center: Physical location details and scheduling");

  addText("3.2 Course Management System", 14, true);
  addText("• Course catalog with filtering and search functionality");
  addText("• Detailed course information and curriculum breakdown");
  addText("• Instructor profiles and credentials");
  addText("• Student testimonials and reviews");
  addText("• Enrollment system with payment integration");
  addText("• Real-time form validation and success confirmation");

  addText("3.3 Events & Webinars System", 14, true);
  addText("• Tabbed interface for upcoming and past events");
  addText("• Event cards with images and details");
  addText("• Event type classification (Event/Webinar)");
  addText("• Enrollment functionality for upcoming events");
  addText("• Success confirmation with event details");

  addText("3.4 Placement & Career Services", 14, true);
  addText("• Placement statistics and success stories");
  addText("• Job placement process overview");
  addText("• Industry partnerships showcase");
  addText("• Student success testimonials");
  addText("• Recruiter integration and hiring partner benefits");

  addSection("4. API Documentation", 16);
  
  addText("4.1 Course Enrollment API", 14, true);
  addText("POST /api/courses/enroll/");
  addText("Request Body: full_name, email, phone, experience, learning_goals, course_title, course_price");
  addText("Response: 201 Created with success message or 400 Bad Request with validation errors");

  addText("4.2 Demo Booking API", 14, true);
  addText("POST /api/demo/book/");
  addText("Request Body: name, email, phone, course_interest, preferred_time");
  addText("Response: 201 Created with booking confirmation message");

  addSection("5. User Experience & Design", 16);
  
  addText("5.1 Design Principles", 14, true);
  addText("• Responsive Design: Mobile-first approach with desktop optimization");
  addText("• Accessibility: WCAG 2.1 AA compliance");
  addText("• Performance: Optimized loading and rendering");
  addText("• Consistency: Unified design language across all pages");

  addText("5.2 Component Library", 14, true);
  addText("• Base Components: Buttons, Cards, Dialogs, Forms, Navigation");
  addText("• Custom Components: Course cards, Event management, Confirmation modals");
  addText("• Theming: Professional blue-purple gradient theme with Tailwind CSS");

  addSection("6. Success Metrics & KPIs", 16);
  
  addText("6.1 Business Metrics", 14, true);
  addText("• Enrollment Rate: Course sign-ups per month");
  addText("• Conversion Rate: Visitor to student conversion");
  addText("• Average Revenue: Per student enrollment");
  addText("• Retention Rate: Student course completion");

  addText("6.2 Technical Metrics", 14, true);
  addText("• Website Performance: Core Web Vitals scores");
  addText("• User Experience: Session duration and bounce rate");
  addText("• System Reliability: Uptime and error rates");
  addText("• Mobile Usage: Mobile traffic percentage");

  addSection("7. Future Enhancements", 16);
  
  addText("7.1 Phase 2 Features", 14, true);
  addText("• Student Dashboard: Course progress tracking");
  addText("• Video Learning Platform: Integrated video player");
  addText("• Assignment System: Homework and project submissions");
  addText("• Discussion Forums: Student community features");

  addText("7.2 Phase 3 Features", 14, true);
  addText("• Mobile Application: React Native app");
  addText("• Advanced Analytics: Student progress analytics");
  addText("• AI Chatbot: 24/7 student support");
  addText("• Certificate Generation: Automated certificate system");

  addSection("8. Development & Deployment", 16);
  
  addText("8.1 Development Workflow", 14, true);
  addText("• Version Control: Git with feature branch workflow");
  addText("• Code Review: Pull request review process");
  addText("• Testing: Unit tests, integration tests, E2E tests");
  addText("• Deployment: CI/CD pipeline with staging environment");

  addText("8.2 Environment Setup", 14, true);
  addText("• Development: Local development with hot reload");
  addText("• Staging: Pre-production testing environment");
  addText("• Production: Live website with monitoring");

  addSection("9. Security & Performance Requirements", 16);
  
  addText("9.1 Performance Requirements", 14, true);
  addText("• Page Load Time: < 3 seconds on 3G networks");
  addText("• First Contentful Paint: < 1.5 seconds");
  addText("• Lighthouse Score: > 90 for Performance, Accessibility, SEO");

  addText("9.2 Security Requirements", 14, true);
  addText("• HTTPS: All traffic encrypted");
  addText("• Data Validation: Server-side validation for all inputs");
  addText("• CORS: Properly configured cross-origin policies");
  addText("• Rate Limiting: API endpoint protection");

  addSection("10. Conclusion", 16);
  
  addText("This PRD provides a comprehensive overview of the Institute of Digital Studies website project. It serves as the definitive guide for development, testing, and deployment phases. Regular updates to this document should be made as features evolve and new requirements emerge.");
  
  addText("For questions or clarifications about any aspect of this PRD, please contact the Product Team.");
  
  yPosition += 10;
  addText("Document History:", 12, true);
  addText("• v1.0 - Initial PRD creation (January 2025)");
  
  addText("Review Schedule:", 12, true);
  addText("• Quarterly review and updates");
  addText("• Feature-driven updates as needed");
  addText("• Post-launch assessment and iteration");

  // Save the PDF
  doc.save('IDS-Product-Requirements-Document.pdf');
};
