import type { NextConfig } from "next";

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
