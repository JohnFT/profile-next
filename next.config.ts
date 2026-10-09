import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/portfolio" for a project site, "" for a user site).
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.42"],
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
