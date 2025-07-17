
# Product Requirements Document (PRD)
## Institute of Digital Studies - Digital Marketing Academy Website

### Version: 1.0
### Date: January 2025
### Document Owner: Product Team

---

## 1. Project Overview

### 1.1 Project Vision
Create a comprehensive digital marketing academy website that serves as the primary platform for course enrollment, student engagement, and business operations for the Institute of Digital Studies.

### 1.2 Project Objectives
- Establish online presence for digital marketing course offerings
- Enable seamless course enrollment and payment processing
- Provide comprehensive information about courses, placement, and company
- Create engagement platforms for events, webinars, and community
- Support both online and offline learning experiences

### 1.3 Target Audience
- **Primary**: Students and working professionals seeking digital marketing skills
- **Secondary**: Corporate recruiters looking for trained professionals
- **Tertiary**: Partners and affiliates in the digital marketing ecosystem

---

## 2. Technical Architecture

### 2.1 Frontend Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: Tanstack React Query
- **HTTP Client**: Axios
- **Payment Integration**: Razorpay (currently commented out)
- **UI Components**: Radix UI primitives with custom theming

### 2.2 Backend Technology Stack
- **Framework**: Django REST Framework
- **Database**: SQLite (development), PostgreSQL (production recommended)
- **API Architecture**: RESTful APIs
- **Authentication**: Django session-based (expandable to JWT)

### 2.3 Project Structure
```
Frontend (React):
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Route-based page components
│   ├── lib/               # Utilities and configurations
│   └── hooks/             # Custom React hooks

Backend (Django):
├── idg_backend/
│   ├── courses/           # Course management app
│   ├── demo/              # Demo booking app
│   ├── placement/         # Placement management app
│   └── idg_backend/       # Main project settings
```

---

## 3. Core Features & Functionality

### 3.1 Navigation & User Experience

#### 3.1.1 Main Navigation
- **Home**: Landing page with hero section
- **Courses**: Course catalog and details
- **Placement**: Job placement information and success stories
- **About**: Company information and team details
- **Contact**: Contact forms and location information
- **Offline Center**: Physical location details and scheduling

#### 3.1.2 "More" Dropdown Navigation
- **FAQ**: Frequently asked questions
- **Terms & Conditions**: Legal terms of service
- **Privacy Policy**: Data protection and privacy information
- **Refund & Cancellation Policy**: Refund procedures and cancellation terms
- **IDS Life**: Community content with videos and short videos
- **Events & Webinars**: Event listings with enrollment
- **Blog**: Educational content and company updates

### 3.2 Course Management System

#### 3.2.1 Course Catalog (`/courses`)
**Features:**
- Grid layout of available courses
- Course filtering and search functionality
- Course preview cards with key information
- Responsive design for all devices

**Course Information Display:**
- Course title and description
- Duration and format (online/offline)
- Pricing information
- Instructor details
- Curriculum highlights
- Prerequisites
- Certification details

#### 3.2.2 Course Details Page (`/courses/:courseId`)
**Features:**
- Comprehensive course information
- Detailed curriculum breakdown
- Instructor profiles and credentials
- Student testimonials and reviews
- Enrollment call-to-action buttons
- Related course recommendations

#### 3.2.3 Course Enrollment System
**Enrollment Dialog Component:**
- Modal-based enrollment form
- Real-time form validation
- Payment integration ready (Razorpay)
- Success confirmation system

**Enrollment Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Experience Level (dropdown)
- Learning Goals (optional)
- Course Title (auto-populated)
- Course Price (auto-populated)

**Backend Integration:**
- API endpoint: `POST /api/courses/enroll/`
- Data validation and storage
- Email confirmation system (to be implemented)

### 3.3 Events & Webinars System

#### 3.3.1 Events Page (`/events`)
**Features:**
- Tabbed interface for "Upcoming" and "Past" events
- Event cards with images and details
- Event type classification (Event/Webinar)
- Enrollment functionality for upcoming events

**Event Information:**
- Event title and description
- Date, time, and duration
- Event type (workshop, webinar, seminar)
- Speaker/instructor information
- Event image/thumbnail
- Enrollment status and capacity

#### 3.3.2 Event Enrollment System
**Event Enrollment Dialog:**
- Simplified enrollment form
- Event-specific information collection
- Success confirmation with event details

**Event Enrollment Form Fields:**
- Full Name (required)
- Mobile Number (required)
- Email (required)
- Current Experience Type (Student/Working Professional)
- Interested Course (dropdown selection)

### 3.4 Placement & Career Services

#### 3.4.1 Placement Page (`/placement`)
**Features:**
- Placement statistics and success stories
- Job placement process overview
- Industry partnerships showcase
- Student success testimonials
- Recruiter information section

**Placement Services:**
- Job placement assistance
- Resume building support
- Interview preparation
- Industry networking opportunities
- Career counseling services

#### 3.4.2 Recruiter Integration
- Recruiter registration forms
- Internship posting capabilities
- Student database access (controlled)
- Hiring partner benefits

### 3.5 Content Management

#### 3.5.1 Blog System (`/blog`)
**Features:**
- Article listing with categories
- Search and filter functionality
- Article detail pages
- Social media sharing
- Comment system (future enhancement)

#### 3.5.2 IDS Life (`/ids-life`)
**Features:**
- Community content showcase
- Video content section
- Short video highlights
- Student life documentation
- Event galleries and memories

### 3.6 Information Pages

#### 3.6.1 FAQ System (`/faq`)
**Features:**
- Accordion-style question layout
- Searchable FAQ content
- Categories for different topics
- Contact link for additional queries

#### 3.6.2 Legal & Policy Pages
- **Terms & Conditions**: Service terms and user agreements
- **Privacy Policy**: Data collection and usage policies
- **Refund & Cancellation Policy**: Comprehensive refund procedures

### 3.7 Contact & Communication

#### 3.7.1 Contact System (`/contact`)
**Features:**
- Multi-channel contact information
- Contact form with inquiry types
- Location maps and directions
- Business hours and availability

#### 3.7.2 Demo Booking System
**Features:**
- Demo class scheduling
- Personal consultation booking
- Calendar integration
- Automated confirmation system

**Backend Integration:**
- API endpoint: `POST /api/demo/book/`
- Booking data management
- Email/SMS confirmations

### 3.8 User Feedback & Confirmation System

#### 3.8.1 Universal Confirmation Modal
**Features:**
- Consistent confirmation experience across all forms
- Customizable success messages
- Type-specific confirmation content
- Clear next steps communication

**Modal Types:**
- Enrollment confirmations
- Booking confirmations
- Form submission confirmations
- Event registration confirmations

**Implementation:**
- Reusable `SubmissionConfirmationDialog` component
- Integrated across all enrollment and booking flows
- Consistent branding and messaging

---

## 4. API Documentation

### 4.1 Course Enrollment API
```
POST /api/courses/enroll/
Content-Type: application/json

Request Body:
{
  "full_name": "string",
  "email": "string",
  "phone": "string",
  "experience": "string",
  "learning_goals": "string",
  "course_title": "string",
  "course_price": "string"
}

Response (201 Created):
{
  "message": "Enrollment successful"
}

Response (400 Bad Request):
{
  "errors": {
    "field_name": ["error_message"]
  }
}
```

### 4.2 Demo Booking API
```
POST /api/demo/book/
Content-Type: application/json

Request Body:
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "course_interest": "string",
  "preferred_time": "string"
}

Response (201 Created):
{
  "message": "Your Demo is Booked successfully"
}
```

---

## 5. Design System & UI Components

### 5.1 Design Principles
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized loading and rendering
- **Consistency**: Unified design language across all pages

### 5.2 Component Library
**Base Components (shadcn/ui):**
- Buttons, Cards, Dialogs, Forms
- Navigation, Accordions, Tabs
- Toast notifications, Loading states

**Custom Components:**
- Course cards and enrollment flows
- Event management components
- Confirmation modals and success states
- Navigation with dropdown menus

### 5.3 Theming & Styling
- **CSS Framework**: Tailwind CSS with custom configuration
- **Color Scheme**: Professional blue-purple gradient theme
- **Typography**: Modern, readable font hierarchy
- **Spacing**: Consistent spacing system using Tailwind utilities

---

## 6. User Journey & Flow

### 6.1 Student Enrollment Journey
1. **Discovery**: Landing page → Course catalog
2. **Research**: Course details → Reviews and testimonials
3. **Decision**: Course enrollment → Form completion
4. **Confirmation**: Payment processing → Success confirmation
5. **Follow-up**: Email confirmation → Course access

### 6.2 Event Registration Journey
1. **Browse**: Events page → Event details
2. **Register**: Event enrollment form → Confirmation
3. **Preparation**: Email reminders → Event participation
4. **Follow-up**: Feedback collection → Course recommendations

### 6.3 Demo Booking Journey
1. **Interest**: Any page → Demo booking CTA
2. **Scheduling**: Demo form → Preferred time selection
3. **Confirmation**: Booking success → Calendar invite
4. **Experience**: Demo session → Enrollment opportunity

---

## 7. Technical Requirements

### 7.1 Performance Requirements
- **Page Load Time**: < 3 seconds on 3G networks
- **First Contentful Paint**: < 1.5 seconds
- **Lighthouse Score**: > 90 for Performance, Accessibility, SEO

### 7.2 Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Responsive Breakpoints**: 320px, 768px, 1024px, 1280px

### 7.3 Security Requirements
- **HTTPS**: All traffic encrypted
- **Data Validation**: Server-side validation for all inputs
- **CORS**: Properly configured cross-origin policies
- **Rate Limiting**: API endpoint protection

---

## 8. Future Enhancements

### 8.1 Phase 2 Features
- **Student Dashboard**: Course progress tracking
- **Video Learning Platform**: Integrated video player
- **Assignment System**: Homework and project submissions
- **Discussion Forums**: Student community features

### 8.2 Phase 3 Features
- **Mobile Application**: React Native app
- **Advanced Analytics**: Student progress analytics
- **AI Chatbot**: 24/7 student support
- **Certificate Generation**: Automated certificate system

### 8.3 Integration Opportunities
- **CRM Integration**: Student relationship management
- **Email Marketing**: Automated campaign system
- **Analytics Platforms**: Google Analytics, Facebook Pixel
- **Payment Gateways**: Multiple payment options

---

## 9. Success Metrics & KPIs

### 9.1 Business Metrics
- **Enrollment Rate**: Course sign-ups per month
- **Conversion Rate**: Visitor to student conversion
- **Average Revenue**: Per student enrollment
- **Retention Rate**: Student course completion

### 9.2 Technical Metrics
- **Website Performance**: Core Web Vitals scores
- **User Experience**: Session duration and bounce rate
- **System Reliability**: Uptime and error rates
- **Mobile Usage**: Mobile traffic percentage

### 9.3 User Engagement Metrics
- **Page Views**: Most visited pages and content
- **Form Completions**: Enrollment and inquiry forms
- **Event Participation**: Webinar and event attendance
- **Content Engagement**: Blog and video consumption

---

## 10. Development & Deployment

### 10.1 Development Workflow
- **Version Control**: Git with feature branch workflow
- **Code Review**: Pull request review process
- **Testing**: Unit tests, integration tests, E2E tests
- **Deployment**: CI/CD pipeline with staging environment

### 10.2 Environment Setup
- **Development**: Local development with hot reload
- **Staging**: Pre-production testing environment
- **Production**: Live website with monitoring

### 10.3 Maintenance & Support
- **Regular Updates**: Security patches and feature updates
- **Performance Monitoring**: Real-time performance tracking
- **User Support**: Help desk and technical support
- **Backup Strategy**: Daily automated backups

---

## 11. Risk Assessment & Mitigation

### 11.1 Technical Risks
- **API Failures**: Implement proper error handling and fallbacks
- **Performance Issues**: Regular performance audits and optimization
- **Security Vulnerabilities**: Regular security assessments

### 11.2 Business Risks
- **User Experience**: Continuous user testing and feedback
- **Competition**: Regular market analysis and feature updates
- **Scalability**: Infrastructure planning for growth

---

## 12. Conclusion

This PRD provides a comprehensive overview of the Institute of Digital Studies website project. It serves as the definitive guide for development, testing, and deployment phases. Regular updates to this document should be made as features evolve and new requirements emerge.

For questions or clarifications about any aspect of this PRD, please contact the Product Team.

---

**Document History:**
- v1.0 - Initial PRD creation (January 2025)

**Review Schedule:**
- Quarterly review and updates
- Feature-driven updates as needed
- Post-launch assessment and iteration
