import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // basePath: "/teams",
  // assetPrefix: "/~perceptron/teams",

  // trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
