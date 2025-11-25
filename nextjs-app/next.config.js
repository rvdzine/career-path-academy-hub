/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  reactStrictMode: true,
}

const path = require('path');

module.exports = {
  outputFileTracingRoot: path.join(__dirname, '../'),
};