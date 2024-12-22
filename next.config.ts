import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"],
  },
  async headers() {
    return [
      {
        // Match all routes
        source: "/:path*",
        headers: [
          {
            key: "x-robots-tag",
            value: "", // Remove the header by setting it to an empty value
          },
        ],
      },
    ];
  },
};

export default nextConfig;
