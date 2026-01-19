export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you had private admin routes, you'd disallow them here
      // disallow: '/private/',
    },
    sitemap: 'https://diplomaticenjoy.com/sitemap.xml',
  }
}
