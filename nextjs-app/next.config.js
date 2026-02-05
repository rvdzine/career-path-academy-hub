/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  reactStrictMode: true,
  trailingSlash: false,
}

module.exports = nextConfig;