# Portfolio Project - Claude Code Configuration

## Project Overview
This is a modern fullstack developer portfolio website built with Next.js, shadcn/ui, and Tailwind CSS. The portfolio features an ocean blue theme and showcases comprehensive fullstack development expertise.

## Development Commands

### Start Development Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
```

### Run Linting
```bash
pnpm lint
```

### Install Dependencies
```bash
pnpm install
```

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui components
- `components/portfolio/` - Custom portfolio components
- `lib/` - Utility functions and helpers
- `public/` - Static assets and images
- `tailwind.config.js` - Tailwind CSS configuration with ocean blue theme

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

## Development Notes
- Uses pnpm as package manager
- ESLint configured for Next.js
- TypeScript ready but currently using .js/.jsx files
- Responsive design with mobile-first approach
- Framer Motion for smooth animations
- EmailJS integration for contact form functionality

## Deployment
- Optimized for Vercel deployment
- Build artifacts in `.next/` directory
- Static assets served from `public/`

## Environment Variables
Required for contact form:
- EmailJS service configuration
- See `.env.example` for template

## Portfolio Content Focus
- Fullstack developer expertise
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, databases
- DevOps: Docker, AWS, CI/CD
- AI/ML: LLM integration, RAG systems