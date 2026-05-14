import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace with the actual URL of whichever site this code is for
  const baseUrl = 'https://www.avishkarai.com'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}