import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['cobe'],
  },
};

export default nextConfig;
