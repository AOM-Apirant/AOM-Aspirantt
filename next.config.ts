import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer, webpack }) => {
    // Exclude Mongoose from Edge Runtime bundles
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        mongoose: 'commonjs mongoose',
      });
    }
    
    // Optimize memory usage during build
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    };
    
    return config;
  },
  // Reduce memory usage during build
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  /* config options here */
};

export default nextConfig;
