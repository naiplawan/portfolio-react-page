import './globals.css'
import PageTransition from '../components/page-transition'
import TransitionOverlay from '../components/transition-overlay'
import { ThemeProvider } from '../components/theme-provider'

export const metadata = {
  title: 'Rachaphol Plookaom - Portfolio',
  description: 'Software Developer Portfolio - Showcasing web development projects and skills',
  keywords: 'software developer, web development, React, Next.js, portfolio',
  author: 'Rachaphol Plookaom',
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
          <TransitionOverlay />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}