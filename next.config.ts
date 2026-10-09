import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: 'bottom-left', 
  },
};

export default nextConfig;