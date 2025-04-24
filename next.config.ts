import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enabling React Strict Mode for better error handling and warnings.
  
  images: {
    domains: ['your-image-domain.com'], // Add external image domains if you're using external sources for images
  },

  webpack(config) {
    // Customize webpack settings here if necessary
    return config;
  },

  async headers() {
    // Set cache headers to improve performance (e.g., for favicon)
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache favicon for 1 year
          },
        ],
      },
    ];
  },
  
  // Optionally, you can add more configurations as needed
};

export default nextConfig;
