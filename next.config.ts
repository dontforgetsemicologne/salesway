import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    USERNAME: process.env.AUTH_USERNAME,
    PASSWORD: process.env.AUTH_PASSWORD,
    API_URL: process.env.API_URL
  },
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "api.microlink.io",
        }
    ]
},
};

export default nextConfig;
