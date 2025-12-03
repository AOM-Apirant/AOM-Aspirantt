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
  webpack: (config, { isServer, webpack, nextRuntime }) => {
    // Exclude Mongoose and bcryptjs from Edge Runtime bundles
    if (nextRuntime === 'edge' || (!isServer && config.target === 'serverless')) {
      config.resolve.alias = {
        ...config.resolve.alias,
        mongoose: false,
        'bcryptjs': false,
        './db': false,
        '@/models/User': false,
      };
    }
    
    // Exclude Mongoose from server bundles as well
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push('mongoose', 'bcryptjs');
      } else if (typeof config.externals === 'object') {
        config.externals.mongoose = 'commonjs mongoose';
        config.externals.bcryptjs = 'commonjs bcryptjs';
      }
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
