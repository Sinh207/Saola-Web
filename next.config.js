/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
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
