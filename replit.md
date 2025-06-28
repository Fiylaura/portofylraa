# replit.md

## Overview

This is a full-stack web application built with modern technologies featuring a React frontend, Express backend, and PostgreSQL database. The application uses a monorepo structure with TypeScript throughout, combining Vite for frontend tooling and Express for the backend API. The UI is built with shadcn/ui components and Tailwind CSS for styling.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **API Structure**: RESTful API with /api prefix for all endpoints

### Database
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with migrations support
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migration Strategy**: Drizzle Kit for database migrations

## Key Components

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

### Frontend Components
- **Component Library**: Comprehensive shadcn/ui component set including forms, dialogs, navigation, and data display components
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Query Client**: Configured TanStack Query client with custom fetch utilities
- **Routing**: Simple routing setup with a landing page and 404 fallback

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Registration**: Centralized route management system
- **Middleware**: Request logging, error handling, and development tooling
- **Development Server**: Vite integration for hot module replacement in development

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server processes requests through registered routes
3. **Data Access**: Storage interface abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: TanStack Query manages client-side state synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management for React
- **wouter**: Lightweight React router
- **@radix-ui/***: Headless UI components for accessibility

### Development Tools
- **Vite**: Frontend build tooling with React plugin
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production backend builds
- **Tailwind CSS**: Utility-first CSS framework

### UI/UX Libraries
- **shadcn/ui**: Pre-built component system
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities
- **class-variance-authority**: Type-safe variant management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema synchronization

### Production Configuration
- **Server**: Node.js with Express serving built frontend assets
- **Database**: PostgreSQL with connection pooling via Neon
- **Environment**: Production mode with optimized builds
- **Static Assets**: Served directly by Express in production

### Development Workflow
- **Hot Reload**: Vite middleware integration for frontend development
- **TypeScript**: Shared type definitions between frontend and backend
- **Database**: Push-based schema updates during development

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.