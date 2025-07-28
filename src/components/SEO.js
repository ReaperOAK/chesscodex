import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Centralized SEO component for all pages.
 * Usage: <SEO title="..." description="..." keywords="..." image="..." url="..." type="..." />
 */
const SEO = ({
  title = 'Kolkata Chess Academy',
  description = 'Elevate your chess skills with expert training and comprehensive courses.',
  keywords = 'chess, chess academy, chess training, chess courses, chess coaching',
  image = 'https://kolkatachessacademy.in/aca.png',
  url = 'https://kolkatachessacademy.in/',
  type = 'website',
  canonical = '',
  children,
  structuredData = null
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {canonical && <link rel="canonical" href={canonical} />}
    {structuredData && (
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    )}
    {children}
  </Helmet>
);

export default SEO;
