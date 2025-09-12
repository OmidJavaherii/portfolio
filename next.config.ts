import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  assetPrefix: '/',
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
