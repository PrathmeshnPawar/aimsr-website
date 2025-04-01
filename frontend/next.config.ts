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

// next.config.js
module.exports = {
  // ...
  allowedDevOrigins: ["http://192.168.1.10:3000", "http://191.168.0.113:3000"], //Add your phone's IP address here.
};

export default nextConfig;
