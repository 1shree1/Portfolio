import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
