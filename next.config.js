/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  }
};
