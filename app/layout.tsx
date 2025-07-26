import './globals.css'
import React from 'react'
import PageTransition from '@/components/page-transition'
import TransitionOverlay from '@/components/transition-overlay'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { PerformanceMonitor } from '@/components/performance-monitor'
import { SkipLink } from '@/components/accessibility/skip-link'

export const metadata = {
  title: 'Rachaphol Plookaom - Fullstack Developer',
  description: 'Experienced fullstack developer specializing in React, Next.js, Node.js, Python, and AI integration. Available for hire.',
  keywords: 'fullstack developer, React, Next.js, Node.js, Python, TypeScript, AI developer, web development, software engineer',
  author: 'Rachaphol Plookaom',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rachaphol-portfolio.vercel.app',
    title: 'Rachaphol Plookaom - Fullstack Developer',
    description: 'Experienced fullstack developer specializing in React, Next.js, Node.js, Python, and AI integration. Available for hire.',
    siteName: 'Rachaphol Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rachaphol Plookaom - Fullstack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rachaphol Plookaom - Fullstack Developer',
    description: 'Experienced fullstack developer specializing in React, Next.js, Node.js, Python, and AI integration.',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rachaphol Portfolio',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icons/icon-192x192.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Analytics />
          <PerformanceMonitor />
          <TransitionOverlay />
          <PageTransition>
            <main id="main-content" tabIndex={-1} className="focus:outline-none">
              {children}
            </main>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}