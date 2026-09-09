import type { NextConfig } from 'next';

const pages = process.env.GITHUB_PAGES === 'true';
const nextConfig: NextConfig = pages ? {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
} : {};

export default nextConfig;
