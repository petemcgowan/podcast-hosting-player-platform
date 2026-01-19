export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your final production domain
  const baseUrl = 'https://diplomaticenjoy.com'

  return [
    {
      url: baseUrl, // The Funk Page (Root)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/house`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/techno`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/downloads`,
      lastModified: new Date(), // Content changes less often
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}