// Performance monitoring utilities
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Core Web Vitals thresholds
const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  INP: { good: 200, needsImprovement: 500 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 },
};

type PerformanceGrade = 'good' | 'needs-improvement' | 'poor';

function getPerformanceGrade(metric: Metric): PerformanceGrade {
  const thresholds = PERFORMANCE_THRESHOLDS[metric.name as keyof typeof PERFORMANCE_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (metric.value <= thresholds.good) return 'good';
  if (metric.value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: Metric, grade: PerformanceGrade) {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_grade: grade,
        metric_value: metric.value,
        metric_rating: metric.rating,
      },
    });
  }

  // Send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}: ${metric.value} (${grade})`, metric);
  }

  // You can also send to your own analytics service here
  // Example: sendToCustomAnalytics(metric, grade);
}

export function initPerformanceMonitoring() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  const handleMetric = (metric: Metric) => {
    const grade = getPerformanceGrade(metric);
    sendToAnalytics(metric, grade);
  };

  // Measure Core Web Vitals
  onCLS(handleMetric);
  onINP(handleMetric);
  onFCP(handleMetric);
  onLCP(handleMetric);
  onTTFB(handleMetric);
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  // Observe long tasks (>50ms)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn(`[Performance] Long task detected: ${entry.duration}ms`, entry);
          
          // Send to analytics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            const gtag = (window as any).gtag;
            gtag('event', 'long_task', {
              event_category: 'Performance',
              event_label: entry.name,
              value: Math.round(entry.duration),
            });
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch {
      // Some browsers don't support longtask
      console.warn('[Performance] Long task observer not supported');
    }
  }

  // Observe navigation timing
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart,
        domProcessing: navigation.domInteractive - navigation.responseEnd,
        domComplete: navigation.domComplete - navigation.domInteractive,
      };

      console.log('[Performance] Navigation timing:', metrics);
      
      // Send navigation metrics to analytics
      Object.entries(metrics).forEach(([name, value]) => {
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'navigation_timing', {
            event_category: 'Performance',
            event_label: name,
            value: Math.round(value),
          });
        }
      });
    }
  });
}

// Resource timing monitoring
export function monitorResourceLoading() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const resource = entry as PerformanceResourceTiming;
      
      // Monitor slow resources (>1s)
      if (resource.duration > 1000) {
        console.warn(`[Performance] Slow resource: ${resource.name} (${resource.duration}ms)`);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'slow_resource', {
            event_category: 'Performance',
            event_label: resource.name,
            value: Math.round(resource.duration),
          });
        }
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['resource'] });
  } catch {
    console.warn('[Performance] Resource observer not supported');
  }
}

// Bundle size monitoring
export function trackBundleSize() {
  if (typeof window === 'undefined') return;

  // Estimate JavaScript bundle size
  const scripts = document.querySelectorAll('script[src]');
  let totalScriptSize = 0;

  scripts.forEach((script) => {
    const src = (script as HTMLScriptElement).src;
    if (src && src.includes('/_next/static/')) {
      // This is a rough estimation - in production you'd want actual bundle analysis
      totalScriptSize += 1; // Count of Next.js scripts
    }
  });

  console.log(`[Performance] Estimated script count: ${totalScriptSize}`);
  
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', 'bundle_analysis', {
      event_category: 'Performance',
      event_label: 'script_count',
      value: totalScriptSize,
    });
  }
}