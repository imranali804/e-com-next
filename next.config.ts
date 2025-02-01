import type { NextConfig } from "next";

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'https://next-ecommerce-template-4.vercel.app/api/product'
      }
    ];
  }
};

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow images to be served from the "public" directory or external domains if needed
    domains: [], // Add external image domains here if required
  },
};

export default nextConfig;
