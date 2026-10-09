import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/portfolio" for a project site, "" for a user site).
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.42"],
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
