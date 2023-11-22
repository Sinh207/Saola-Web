import React from 'react';
import Head from 'next/head';

const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
  keywords,
}) => [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  { name: 'twitter:image:src', content: image },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'og:title', content: title },
  { name: 'og:type', content: openGraphType },
  { name: 'og:url', content: url },
  { name: 'og:image', content: image },
  { name: 'og:description', content: description },
  { name: 'description', content: description },
  { name: 'keywords', content: keywords || '' },
  {
    name: 'og:site_name',
    content: 'Saola',
  },
  {
    name: 'og:published_time',
    content: createdAt || new Date().toISOString(),
  },
  {
    name: 'og:modified_time',
    content: updatedAt || new Date().toISOString(),
  },
];

const SEO = (props) => {
  const {
    url, title, description, image, schemaType,
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {socialTags(props).map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': schemaType,
            name: title,
            about: description,
            url,
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
