import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
const { withCloudflarePagesAdapter } = require('@cloudflare/next-on-pages/adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {};
if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
export default nextConfig;

module.exports = withCloudflarePagesAdapter({
  // Your existing Next.js configuration
  experimental: {
    appDir: true, // Enable if you're using the app directory
  },
});