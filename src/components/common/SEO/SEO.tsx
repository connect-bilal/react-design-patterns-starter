import { Helmet } from 'react-helmet';

import { getSEO } from './SEO.helper';
import type { SEOProps } from './SEO.types';

const SEO = (props: SEOProps) => {
  const { title, description, keywords, image, url, type } = getSEO(props);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  );
};

export default SEO;
