import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const FALLBACK_IMAGE =
  'https://meetup2025.ciiic.nl/images/CIIIC-ogimage.jpeg';
const SITE_NAME = 'CIIIC';
const SITE_URL = 'https://ciiic.nl'; // Update if needed

export default function SEO({
  title,
  description,
  image,
}: SEOProps) {
  const seoTitle = `${title} - ${SITE_NAME}`;
  const seoImage = image || FALLBACK_IMAGE;
  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={seoImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={SITE_URL} />
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={seoTitle} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
}
