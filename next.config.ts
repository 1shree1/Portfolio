import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
