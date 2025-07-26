
# Fullstack Developer Portfolio

A modern, production-ready portfolio website built with Next.js, TypeScript, and cutting-edge web technologies. Features comprehensive performance optimizations, accessibility compliance, and professional design patterns.

## ✨ Key Features

### 🚀 Performance & Optimization
- **Core Web Vitals Monitoring** - Real-time performance tracking
- **Next.js Image Optimization** - WebP/AVIF format support
- **Advanced Caching** - Optimized resource loading
- **Bundle Optimization** - Code splitting and compression

### ♿ Accessibility & SEO
- **WCAG 2.1 AA Compliant** - Full accessibility support
- **Structured Data** - JSON-LD for enhanced search visibility
- **Dynamic Sitemap** - Auto-generated SEO optimization
- **Screen Reader Support** - Complete keyboard navigation

### 🔒 Security & Best Practices
- **Environment Variables** - Secure credential management
- **Security Headers** - CSP, XSS protection, and content restrictions
- **TypeScript Strict Mode** - Comprehensive type safety
- **Error Boundaries** - Graceful error handling

### 📱 Progressive Web App
- **PWA Manifest** - App-like experience
- **Mobile Optimization** - Touch-friendly responsive design
- **Offline Capabilities** - Enhanced mobile performance

### 🎨 Enhanced User Experience
- **Interactive Skills Display** - Proficiency levels with animated progress bars
- **Blog Section** - Search and filtering capabilities
- **Loading States** - Skeleton loaders and smooth transitions
- **Dark Mode Support** - Seamless theme switching

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features with concurrent features
- **TypeScript** - Type-safe development with strict mode
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **shadcn/ui** - High-quality accessible component library
- **Framer Motion** - Advanced animations and micro-interactions
- **Lucide React** - Consistent icon system

### Performance & Monitoring
- **web-vitals** - Core Web Vitals tracking
- **Next.js Image** - Optimized image delivery
- **Performance API** - Real-time monitoring

### Backend & Integrations
- **EmailJS** - Secure contact form functionality
- **Structured Data** - JSON-LD for SEO enhancement
- **PWA Manifest** - Progressive Web App capabilities

### Development Tools
- **ESLint** - Advanced code linting with Next.js rules
- **TypeScript Strict Mode** - Comprehensive type checking
- **Error Boundaries** - Production-ready error handling
- **pnpm** - Fast, efficient package management

## 🎨 Design Features

- **Ocean Blue Theme:** Primary color palette with complementary gradients
- **Component-Based:** Modular shadcn/ui components for consistency
- **Responsive Grid:** Flexible layouts using CSS Grid and Flexbox
- **Smooth Animations:** Professional motion design with Framer Motion
- **Modern Typography:** Carefully selected font hierarchy and spacing

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/naiplawan/portfolio-react-page.git
   cd portfolio-react-page
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # EmailJS Configuration (Required for contact form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Contact Information
   NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   
   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Optional: Google Analytics
   NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/                           # Next.js App Router
│   ├── about/page.tsx            # About page with social links
│   ├── blog/page.tsx             # Blog with search and filtering
│   ├── contact/page.tsx          # Contact page with form
│   ├── projects/page.tsx         # Projects showcase
│   ├── robots.txt/route.ts       # SEO robots configuration
│   ├── sitemap.xml/route.ts      # Dynamic sitemap generation
│   ├── manifest.json/route.ts    # PWA manifest
│   ├── error.tsx                 # Global error boundary
│   ├── globals.css               # Global styles with CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page with structured data
├── components/
│   ├── accessibility/            # Accessibility components
│   │   ├── skip-link.tsx        # Skip navigation link
│   │   ├── focus-trap.tsx       # Focus management
│   │   └── screen-reader-announcer.tsx
│   ├── seo/
│   │   └── structured-data.tsx   # JSON-LD structured data
│   ├── ui/                       # shadcn/ui components
│   │   ├── skeleton.tsx         # Loading skeletons
│   │   └── ...                  # Button, Card, Input, etc.
│   ├── portfolio/               # Custom portfolio components
│   │   ├── skeletons.tsx        # Component-specific loaders
│   │   └── ...                  # NavBar, Skills, etc.
│   ├── error-boundary.tsx       # Error handling component
│   ├── performance-monitor.tsx  # Performance tracking
│   └── page-transition.tsx      # Route transitions
├── lib/
│   ├── performance.ts           # Core Web Vitals monitoring
│   ├── github-api.ts           # GitHub integration
│   └── utils.ts                # Utility functions
├── public/
│   ├── icons/                  # PWA icons (various sizes)
│   ├── assets/                 # Images and media files
│   └── ...                     # Static assets
├── .env.local.example          # Environment variables template
└── tailwind.config.js          # Tailwind configuration
```

## 🎯 Components Overview

### Core Components
- **NavBar:** Responsive navigation with animated text transitions
- **Content-Section:** Hero section with typewriter effects and animated cards
- **AboutMe:** Comprehensive developer story with skill highlights
- **Skills-Section:** Categorized technology stack with interactive cards
- **Contact:** Full-featured contact form with validation

### UI Components (shadcn/ui)
- Button, Card, Input, Textarea, Badge, Separator
- Consistent styling with ocean blue theme
- Accessible and keyboard navigable

## 🌊 Ocean Blue Theme

The portfolio uses a carefully crafted ocean blue color palette:

```css
--primary: 203 89% 53%;        /* Ocean Blue */
--ocean-blue-50: #eff6ff;     /* Light accent */
--ocean-blue-600: #2563eb;    /* Primary shade */
--ocean-blue-900: #1e3a8a;    /* Dark accent */
```

## 📱 Responsive Design

- **Mobile-first:** Optimized for all screen sizes
- **Flexible Grid:** CSS Grid and Flexbox for complex layouts
- **Touch-friendly:** Large touch targets and smooth interactions
- **Performance:** Optimized images and lazy loading

## 🚀 Performance Features

### Core Web Vitals Monitoring
- Real-time LCP, INP, CLS, FCP, and TTFB tracking
- Performance budgets and alerts
- Navigation timing analysis
- Resource loading optimization

### Image Optimization
- Next.js Image component with WebP/AVIF support
- Responsive image sizes (640px to 3840px)
- Lazy loading and blur placeholder
- Automatic format selection

### Accessibility Compliance
- WCAG 2.1 AA standards
- Screen reader compatibility
- Keyboard navigation support
- Focus management and skip links
- Color contrast compliance

## 🚀 Deployment

### Production Build
```bash
# Build and test
pnpm build
pnpm start

# Deploy to Vercel
vercel --prod
```

### Environment Variables Setup
Ensure these variables are set in your deployment platform:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_APP_URL`

### Post-Deployment Checklist
- [ ] Test contact form functionality
- [ ] Verify PWA installation
- [ ] Check Core Web Vitals scores
- [ ] Validate accessibility compliance
- [ ] Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Mo'Mos** - [GitHub](https://github.com/naiplawan)

---

*Built with ❤️ using Next.js, shadcn/ui, and modern web technologies*
