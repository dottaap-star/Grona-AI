/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/grona-ai',
  assetPrefix: '/grona-ai',
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['@untitled-ui/icons'],
  },
};

export default nextConfig;

