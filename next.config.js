/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com',],
},
env: {
  API_URL: process.env.API_URL,
},
}

module.exports = nextConfig
