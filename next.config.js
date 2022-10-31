/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opendata.hawaii.gov',

        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
