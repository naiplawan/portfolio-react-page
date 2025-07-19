
# Fullstack Developer Portfolio

A modern, responsive portfolio website built with Next.js, shadcn/ui, and Tailwind CSS. Features an ocean blue theme and showcases fullstack development expertise with interactive animations and a clean, professional design.

## ✨ Features

- **Modern Design:** Built with shadcn/ui components and ocean blue theme
- **Responsive Layout:** Optimized for all devices with Tailwind CSS flexbox layouts
- **Interactive Animations:** Smooth transitions using Framer Motion
- **Fullstack Focus:** Comprehensive showcase of frontend, backend, and DevOps skills
- **Contact Form:** Functional contact form with EmailJS integration
- **Fast Performance:** Built on Next.js 15 with App Router
- **Dark Mode Support:** Seamless theme switching capability
- **TypeScript Ready:** Type-safe development environment

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first CSS
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons

### Backend & Integrations
- **EmailJS** - Contact form functionality
- **Vercel** - Deployment platform

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast package manager

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
   cp .env.example .env.local
   # Add your EmailJS credentials
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   └── portfolio/         # Custom portfolio components
├── lib/                   # Utilities and helpers
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
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

## 🚀 Deployment

Deploy to Vercel:

```bash
pnpm build
vercel --prod
```

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
