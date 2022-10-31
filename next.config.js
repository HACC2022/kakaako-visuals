/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
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
