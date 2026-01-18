import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. This tells Next.js to create a static 'out' folder
  output: 'export',

  // 2. REQUIRED for Static Export: Disable server-side image optimization
  // (Because S3 cannot optimize images on the fly like a Node server)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
