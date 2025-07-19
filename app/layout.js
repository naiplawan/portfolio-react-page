import './globals.css'
import PageTransition from '../components/page-transition'

export const metadata = {
  title: 'Rachaphol Plookaom - Portfolio',
  description: 'Software Developer Portfolio - Showcasing web development projects and skills',
  keywords: 'software developer, web development, React, Next.js, portfolio',
  author: 'Rachaphol Plookaom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}