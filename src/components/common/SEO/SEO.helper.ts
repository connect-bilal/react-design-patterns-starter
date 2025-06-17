import type { SEOProps } from './SEO.types';

// Default SEO configuration used across the application.
// You can override these values on a per-page basis using the <SEO /> component.
export const defaultSEO: Required<SEOProps> = {
  title: __APP_NAME__ ?? 'My App',
  description:
    'A minimal and scalable React starter template focused on best practices and modern design patterns. This boilerplate helps build maintainable and performant React apps.',
  keywords: 'react, design patterns, vite, typescript',
  image: '/startup.png', // must exist in public folder
  url: 'https://storybook-react-design-patterns.vercel.app',
  type: 'website',
};

// Merge default SEO values with any page-level overrides
export const getSEO = (custom?: SEOProps): Required<SEOProps> => {
  return { ...defaultSEO, ...custom };
};
