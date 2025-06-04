/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  trailingSlash: true,
  distDir: '.next',
  assetPrefix: '/',
};

export default nextConfig;
