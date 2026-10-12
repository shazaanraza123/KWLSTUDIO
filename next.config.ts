import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  transpilePackages: ["three"],
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/kwl.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
