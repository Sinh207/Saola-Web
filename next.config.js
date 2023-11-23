/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  reactStrictMode: false,
  eslint: {
    dirs: ['components', 'pages', 'utils'],
  },
  images: {
    formats: ['image/webp'],
    disableStaticImages: true,
    minimumCacheTTL: 60 * 60 * 24,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'https://saola.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'https://saola-web.pages.dev',
        pathname: '/images/**',
      },
    ],
  },
};

// eslint-disable-next-line import/no-commonjs
module.exports = nextConfig;
