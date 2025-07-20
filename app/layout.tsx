import './globals.css'
import PageTransition from '@/components/page-transition'
import TransitionOverlay from '@/components/transition-overlay'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Analytics />
          <TransitionOverlay />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}