'use client';

import { useEffect } from 'react';
import { initPerformanceMonitoring, observePerformance, monitorResourceLoading, trackBundleSize } from '@/lib/performance';

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Core Web Vitals monitoring
    initPerformanceMonitoring();
    
    // Start additional performance observations
    observePerformance();
    monitorResourceLoading();
    
    // Track bundle size after initial load
    const timer = setTimeout(() => {
      trackBundleSize();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
}