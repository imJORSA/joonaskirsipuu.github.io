import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, type = 'website' }) {
  const { pathname } = useLocation();
  const siteUrl = 'https://joonaskirsipuu.eu';
  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Joonas Kirsipuu" />
      <meta name="robots" content="index, follow" />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <html lang="en" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}