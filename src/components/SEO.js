import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Centralized SEO component for all pages.
 * Usage: <SEO title="..." description="..." keywords="..." image="..." url="..." type="..." />
 */

const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kolkata Chess Academy",
  "url": "https://kolkatachessacademy.in/",
  "logo": "https://kolkatachessacademy.in/aca.png",
  "sameAs": [
    "https://www.facebook.com/kolkatachessacademy",
    "https://twitter.com/KolkataChess",
    "https://www.instagram.com/kolkatachessacademy/"
  ]
};

const SEO = ({
  title = 'Kolkata Chess Academy',
  description = 'Elevate your chess skills with expert training and comprehensive courses.',
  keywords = 'chess, chess academy, chess training, chess courses, chess coaching',
  image = 'https://kolkatachessacademy.in/aca.png',
  url = 'https://kolkatachessacademy.in/',
  type = 'website',
  canonical = 'https://kolkatachessacademy.in/',
  children,
  structuredData = defaultStructuredData
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="Kolkata Chess Academy" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content="@KolkataChess" />
    <link rel="canonical" href={canonical} />
    {structuredData && (
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    )}
    {children}
  </Helmet>
);

export default SEO;
