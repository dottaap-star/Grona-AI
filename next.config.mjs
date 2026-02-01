/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['@untitled-ui/icons'],
  },
};

export default nextConfig;

