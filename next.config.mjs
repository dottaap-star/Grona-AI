/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // produce a static export
  basePath: '/grona-ai',       // match the repository name
  assetPrefix: '/grona-ai/',   // ensure assets load from the correct path
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['@untitled-ui/icons'],
  },
};

export default nextConfig;

