/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // baraye tage image next
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.digikala.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // ta inja
};

export default nextConfig;
