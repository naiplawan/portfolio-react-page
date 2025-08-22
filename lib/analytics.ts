const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
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