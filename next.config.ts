import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['placehold.co', 'lh3.googleusercontent.com']
  },
  
  experimental: {
    ppr: "incremental",
    serverActions: {
      bodySizeLimit: "5mb",
    }
  }
};

export default nextConfig;
