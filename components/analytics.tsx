'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_TRACKING_ID || !window.gtag) return

    window.gtag('config', GA_TRACKING_ID, {
      page_path: pathname,
    })
  }, [pathname])

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: eventName,
    ...parameters,
  })
}

export function trackPageView(url: string) {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}