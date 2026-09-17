import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Generate a completely static website
  output: 'export',

  // Next/Image normally requires a Next.js server for optimization.
  // Static export has no server, so disable the optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;