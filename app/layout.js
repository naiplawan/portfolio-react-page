import './globals.css'
import '../src/index.css'
import PageTransition from '../components/page-transition'

export const metadata = {
  title: 'React Resume Project',
  description: 'Portfolio website built with Next.js',
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