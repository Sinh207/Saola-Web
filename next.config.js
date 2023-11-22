/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'pages', 'utils'],
  },
  images: {
    formats: ['image/webp'],
    disableStaticImages: true,
    minimumCacheTTL: 60 * 60 * 24,
    domains: ['*'],
  },
};

// eslint-disable-next-line import/no-commonjs
module.exports = nextConfig;
