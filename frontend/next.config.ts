import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase limit (adjust as needed)
    },
  },
};

module.exports = {
  output: "standalone",
};

export default nextConfig;
