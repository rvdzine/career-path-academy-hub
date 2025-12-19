/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  reactStrictMode: false,
  output: 'standalone',
};

module.exports = nextConfig;