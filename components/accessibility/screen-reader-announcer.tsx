'use client';

import { useEffect, useRef } from 'react';

interface ScreenReaderAnnouncerProps {
  message: string;
  priority?: 'polite' | 'assertive';
  clearAfter?: number;
}

export function ScreenReaderAnnouncer({ 
  message, 
  priority = 'polite', 
  clearAfter = 5000 
}: ScreenReaderAnnouncerProps) {
  const announcerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!message || !announcerRef.current) return;

    // Update the message
    announcerRef.current.textContent = message;

    // Clear the message after specified time
    const timer = setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = '';
      }
    }, clearAfter);

    return () => clearTimeout(timer);
  }, [message, clearAfter]);

  return (
    <div
      ref={announcerRef}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );
}

