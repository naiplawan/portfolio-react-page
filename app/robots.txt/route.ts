export function GET() {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${process.env.NEXT_PUBLIC_APP_URL || 'https://rachaphol-portfolio.vercel.app'}/sitemap.xml

# Crawl-delay for bots
Crawl-delay: 1

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Disallow admin or private areas (if any in future)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/`;

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}