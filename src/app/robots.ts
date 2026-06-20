import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/app-ads.txt'],
      disallow: '/privacy-policy',
    },
    sitemap: 'https://edwinliby.dev/sitemap.xml',
  }
}
