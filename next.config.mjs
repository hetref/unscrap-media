/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aryu-um.github.io",
      },
      {
        protocol: "https",
        hostname: "strapi-um.onrender.com",
      },
    ],
  },
};

export default nextConfig;
