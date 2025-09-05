# CFNA Marketing Website

A modern, responsive marketing website for CFNA Marketing agency built with React, TypeScript, and Tailwind CSS.

## Features

- Modern glass-effect design with sleek styling
- Responsive layout for all devices
- Multi-page navigation (Home, Services, About, Portfolio, Testimonials, Contact)
- SEO-optimized with meta tags and Open Graph data
- Contact form with validation
- Professional portfolio showcases and client testimonials

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Build Commands

The project includes proper build configuration in `vercel.json`:
- Build Command: `cd client && npm install && npm run build`
- Output Directory: `client/dist`
- Framework: Vite

## Development

To run locally:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

- `/client` - React frontend application
- `/server` - Express backend (not needed for static deployment)
- `/shared` - Shared TypeScript definitions

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI components
- React Hook Form with Zod validation
- Wouter for routing
- Framer Motion for animations