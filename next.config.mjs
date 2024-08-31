/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_FIREBASE_CONFIG: process.env.NEXT_PUBLIC_FIREBASE_CONFIG,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
