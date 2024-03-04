/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aryu-um.github.io",
      },
    ],
  },
};

export default nextConfig;
