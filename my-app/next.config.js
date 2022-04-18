/** @type {import('next').NextConfig} */
const nextConfig = {
  source: "/",
  destination: "/posts/firstPost",
  permanent: true,
  reactStrictMode: true,
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
