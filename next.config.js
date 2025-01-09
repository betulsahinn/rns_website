/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports =
    {
      nextConfig,
      env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,},
    };
