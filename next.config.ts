/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'], // Asegura que los archivos .tsx sean reconocidos
};

module.exports = nextConfig;
