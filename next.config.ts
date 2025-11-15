import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ntec-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ntec-website/' : '',
};

export default nextConfig;
