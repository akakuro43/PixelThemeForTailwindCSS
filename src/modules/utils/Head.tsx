import React from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string
  description?: string
  url?: string
  keywords?: string
  ogImage?: string
  siteName?: string
  noindex?: boolean
}

export const Head = ({
  title,
  description,
  url,
  keywords,
  ogImage,
  noindex,
  siteName,
}: Props) => {
  return (
    <NextHead>
      <title>{title || ''}</title>
      
      <meta name="description" content={description || ''} />
      <meta name="keywords" content={keywords || ''} />
      {noindex && <meta name="robots" content="noindex" />}
      {!noindex && url && <link rel="canonical" href={url} />}
      <meta property="og:url" content={url || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:site_name" content={siteName || ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={ogImage || ''} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link> */}
    </NextHead>
  )
}
