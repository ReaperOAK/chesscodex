import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Centralized SEO component for all pages.
 * Usage: <SEO title="..." description="..." keywords="..." image="..." url="..." type="..." />
 */

const defaultKcaStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kolkata Chess Academy",
  "url": "https://kolkatachessacademy.in/",
  "logo": "https://kolkatachessacademy.in/kca.png",
  "sameAs": [
    "https://www.facebook.com/kolkatachessacademy",
    "https://twitter.com/KolkataChess",
    "https://www.instagram.com/kolkatachessacademy/"
  ]
};

const defaultAspireStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aspire Chess Academy",
  "url": "https://aspirechess.in/",
  "logo": "https://kolkatachessacademy.in/aca.png",
  "sameAs": [
    "https://www.facebook.com/aspirechess",
    "https://twitter.com/AspireChess",
    "https://www.instagram.com/aspirechess/"
  ]
};

function SEO(props) {
  const location = useLocation();
  const isAspire = location.pathname.startsWith('/aspirechess');

  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    canonical,
    children,
    structuredData
  } = props;

  // theme-aware defaults; props override these
  const defaults = isAspire
    ? {
        title: 'Aspire Chess Academy',
        description: 'Aspire Chess Academy — expert chess coaching and online courses.',
        keywords: 'chess, online chess courses, aspire chess, coaching',
        image: 'https://kolkatachessacademy.in/aca.png',
        url: 'https://aspirechess.in/',
        canonical: props.canonical || 'https://aspirechess.in/',
        structuredData: structuredData || defaultAspireStructuredData,
        twitter: '@AspireChess',
        themeColor: '#FBBF24' // amber
      }
    : {
        title: 'Kolkata Chess Academy',
        description: 'Elevate your chess skills with expert training and comprehensive courses at Kolkata Chess Academy.',
        keywords: 'chess, chess academy, chess training, chess courses, chess coaching',
        image: 'https://kolkatachessacademy.in/kca.png',
        url: 'https://kolkatachessacademy.in/',
        canonical: props.canonical || 'https://kolkatachessacademy.in/',
        structuredData: structuredData || defaultKcaStructuredData,
        twitter: '@KolkataChess',
        themeColor: '#00D1FF' // cyan
      };

  const finalTitle = title || defaults.title;
  const finalDescription = description || defaults.description;
  const finalKeywords = keywords || defaults.keywords;
  const finalImage = image || defaults.image;
  const finalUrl = url || defaults.url;
  const finalCanonical = canonical || defaults.canonical;
  const finalStructured = structuredData || defaults.structuredData;
  const finalTwitter = defaults.twitter;
  const finalThemeColor = defaults.themeColor;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content={isAspire ? 'Aspire Chess Academy' : 'Kolkata Chess Academy'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content={finalTwitter} />
      <meta name="theme-color" content={finalThemeColor} />
      <link rel="canonical" href={finalCanonical} />
      {finalStructured && (
        <script type="application/ld+json">{JSON.stringify(finalStructured)}</script>
      )}
      {children}
    </Helmet>
  );
}

export default SEO;
