import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  distDir: "dist",

  basePath: "/~perceptron/teams",
  assetPrefix: "/~perceptron/teams",

  // trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
