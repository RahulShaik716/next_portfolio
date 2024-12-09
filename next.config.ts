import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "ibb.co",
    //     port: "",
    //     pathname: "/ibb.co/**",
    //   },
    // ],
  },
};

export default nextConfig;
