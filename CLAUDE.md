# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Portfolio Project - Claude Code Configuration

## Project Overview
This is a modern fullstack developer portfolio website built with Next.js, shadcn/ui, and Tailwind CSS. The portfolio features an ocean blue theme and showcases comprehensive fullstack development expertise.

## Development Commands

### Essential Commands
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting (Next.js ESLint)
pnpm lint

# Install dependencies
pnpm install
```

## Architecture & Project Structure

### Core Architecture
- **Next.js 15** App Router with TypeScript support
- **Component-based architecture** with clear separation between UI and portfolio components
- **Theme system** using shadcn/ui with CSS custom properties for consistent styling
- **Page transitions** with Framer Motion for smooth navigation

### Directory Structure
```
app/                    # Next.js App Router (pages and layouts)
├── layout.tsx         # Root layout with theme provider
├── page.tsx           # Homepage with animated sections
├── about/page.tsx     # About page
├── contact/page.tsx   # Contact page with EmailJS integration
├── projects/page.tsx  # Projects showcase
└── globals.css        # Global styles and CSS custom properties

components/
├── ui/                # shadcn/ui components (button, card, etc.)
├── portfolio/         # Custom portfolio components
│   ├── NavBar.tsx     # Fixed navigation with mobile sheet
│   ├── Content-Section.tsx  # Hero section with typewriter
│   ├── Skills-Section.tsx   # Technology showcase
│   ├── Contact.tsx    # Contact form with EmailJS
│   └── ...
├── page-transition.tsx # Route transition wrapper
└── theme-provider.tsx # Dark/light theme context

lib/utils.js           # Utility functions (cn helper)
public/                # Static assets, images, resume PDF
```

### Path Aliases
- `@/*` - Root directory alias configured in tsconfig.json

## Key Technologies
- **Next.js 15** with App Router
- **React 19** with modern hooks
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** for consistent components
- **Framer Motion** for animations
- **EmailJS** for contact form

## Theme Configuration
The project uses an ocean blue color scheme defined in:
- `tailwind.config.js` - Custom color palette
- `app/globals.css` - CSS custom properties for shadcn/ui

Primary colors:
- Ocean Blue: `#3b82f6` (primary)
- Light variants: `#eff6ff` to `#dbeafe`
- Dark variants: `#1e40af` to `#172554`

## Component Structure
### Main Components
1. **NavBar** - Responsive navigation with animated text
2. **Content-Section** - Hero section with typewriter effects
3. **AboutMe** - Developer story with skill highlights
4. **Skills-Section** - Technology stack showcase
5. **Contact** - Functional contact form

### UI Components (shadcn/ui)
- Button, Card, Input, Textarea, Badge, Separator
- All styled with ocean blue theme variants

## Development Patterns & Conventions

### Component Patterns
- **Client Components**: Use `'use client'` directive for interactive components
- **Server Components**: Default for static content and layouts
- **Motion Components**: Wrap sections with Framer Motion for animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### State Management
- **Local State**: React useState for component-level state
- **Theme State**: next-themes for dark/light mode persistence
- **Navigation**: Next.js App Router with useRouter hook

### Styling Conventions
- **Tailwind Classes**: Use semantic color tokens (primary, secondary, muted)
- **CSS Custom Properties**: Defined in app/globals.css for theme consistency
- **Component Variants**: shadcn/ui components with variant prop patterns
- **Animation**: Framer Motion with consistent timing and easing

### File Naming
- **Pages**: kebab-case directories with page.tsx
- **Components**: PascalCase with descriptive names
- **Utilities**: camelCase in lib/ directory

## Configuration Details

### TypeScript Configuration
- **Compiler Options**: Target ES2017, strict mode disabled for gradual migration
- **Path Mapping**: `@/*` alias for clean imports
- **Module Resolution**: Node-style with ES modules

### Tailwind Configuration
- **Design System**: shadcn/ui color tokens via CSS custom properties
- **Content Paths**: Configured for app/, components/, and src/ directories
- **Plugins**: tailwindcss-animate for smooth animations

### Next.js Configuration
- **React Strict Mode**: Enabled for development checks
- **Image Optimization**: Disabled (unoptimized: true) for static deployment
- **App Router**: Using latest Next.js 15 routing patterns

## Deployment & Environment
- **Target Platform**: Vercel (optimized configuration)
- **Build Output**: `.next/` directory with static assets
- **Environment Variables**: EmailJS configuration required for contact form
- **Static Assets**: Served from `public/` including resume PDF and project images

## Portfolio Content Focus
- Fullstack developer expertise
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, databases
- DevOps: Docker, AWS, CI/CD
- AI/ML: LLM integration, RAG systems