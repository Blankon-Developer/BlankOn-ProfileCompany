import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'react-icons/bi', 'react-icons/fa', 'react-icons/md', 'react-icons/gi', 'react-icons/pi', 'react-icons/ri', 'react-icons/ti', 'react-icons/io', 'react-icons/tb', 'react-icons/bs', 'react-icons/lia', 'react-icons/vsc', 'react-icons/ai', 'react-icons/gr', 'react-icons/si', 'react-icons/fi', 'react-icons/rx', 'react-icons/im'],
  },


  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
  
export default nextConfig;
