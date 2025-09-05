# CFNA Marketing Website

## Overview

This is a full-stack marketing website for CFNA Marketing, a digital marketing agency specializing in SEO optimization, content creation, and social media management. The application features a modern, responsive single-page application with a contact form system for lead generation. Built with React, TypeScript, Express.js, and PostgreSQL, it demonstrates a professional marketing website with robust form handling and database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend
- **Storage**: Dual storage implementation with in-memory fallback and PostgreSQL support

### Component Structure
The frontend follows a modular component architecture with:
- **Page Components**: Single home page with organized sections
- **Section Components**: Modular sections (Hero, Services, About, Portfolio, Testimonials, Contact, Footer)
- **UI Components**: Reusable shadcn/ui components for consistent design
- **Layout Components**: Navigation and responsive layout handling

### Database Design
- **Users Table**: Basic user authentication structure (prepared for future features)
- **Contact Inquiries Table**: Stores form submissions with fields for name, email, company, services, and messages
- **Schema Validation**: Drizzle-zod integration for automatic schema validation

### API Design
- **Contact Endpoint**: POST /api/contact for form submissions with validation
- **Admin Endpoint**: GET /api/contact-inquiries for retrieving submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed API request logging for monitoring

### Development Workflow
- **TypeScript Configuration**: Shared types between client and server via shared directory
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)
- **Development Server**: Vite dev server with HMR and Express API proxy
- **Production Build**: Optimized builds with static asset serving

### Styling System
- **Design Tokens**: CSS custom properties for colors, spacing, and typography
- **Theme Support**: Prepared for dark/light mode switching
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Class Variance Authority for component styling patterns

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **Node.js Runtime**: Express.js, TypeScript, tsx for development
- **Database**: Neon Database (PostgreSQL), Drizzle ORM, Drizzle Kit for migrations

### UI and Styling Libraries  
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx, tailwind-merge for className management

### Development and Build Tools
- **Build System**: Vite with React plugin
- **Development**: Replit-specific plugins for enhanced development experience
- **Validation**: Zod for runtime type checking and schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session store (prepared)

### Third-party Integrations
- **Database Provider**: Neon Database for managed PostgreSQL
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **External Assets**: Unsplash for portfolio and testimonial images
- **Development Banner**: Replit development environment integration