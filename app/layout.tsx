import './globals.css'
import React from 'react'
import PageTransition from '@/components/page-transition'
import TransitionOverlay from '@/components/transition-overlay'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { PerformanceMonitor } from '@/components/performance-monitor'
import { SkipLink } from '@/components/accessibility/skip-link'
import { AuthProvider } from '@/components/auth/AuthContext'

export const metadata = {
  title: 'Rachaphol Plookaom - Frontend Developer',
  description: 'Frontend Developer at Unixdev Co., Ltd. specializing in innovative user experiences, performance optimization, and modern web/mobile technologies.',
  keywords: 'frontend developer, React, Next.js, TypeScript, Go, Flutter, performance optimization, web development, software engineer, Unixdev',
  author: 'Rachaphol Plookaom',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rachaphol-portfolio.vercel.app',
    title: 'Rachaphol Plookaom - Frontend Developer',
    description: 'Frontend Developer at Unixdev Co., Ltd. specializing in innovative user experiences, performance optimization, and modern web/mobile technologies.',
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
    title: 'Rachaphol Plookaom - Frontend Developer',
    description: 'Frontend Developer at Unixdev Co., Ltd. specializing in innovative user experiences, performance optimization, and modern web/mobile technologies.',
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
          <AuthProvider>
            <Analytics />
            <PerformanceMonitor />
            <TransitionOverlay />
            <PageTransition>
              <main id="main-content" tabIndex={-1} className="focus:outline-none">
                {children}
              </main>
            </PageTransition>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}