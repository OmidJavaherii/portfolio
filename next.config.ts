import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  trailingSlash: true,
  distDir: '.next',
  assetPrefix: '/',
  productionBrowserSourceMaps: true,
};

export default nextConfig;
