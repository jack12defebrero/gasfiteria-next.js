/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'], // Asegura que los archivos .tsx sean reconocidos
  i18n: {
    locales: ['en', 'es'],  // Definir los idiomas soportados
    defaultLocale: 'es',     // Establecer el idioma predeterminado a español
    localeDetection: true,   // Detectar automáticamente el idioma del navegador
  },
  images: {
    domains: ['cdn.pixabay.com'], // Permite la carga de imágenes desde Pixabay
  },
};

module.exports = nextConfig;
