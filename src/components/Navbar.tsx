import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo y enlace a WhatsApp */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="images/Logo_jean-transparente.png"
              alt="Logo Soluciones Figueroa"
              className="h-8"
            />
            <span className="text-2xl font-bold text-gray-800">Figueroa</span>
          </a>
         
        </div>

        {/* Menú de navegación en desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Inicio')}</span>
</Link>
          <Link href="/about">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Nosotros')}</span>
          </Link>
          <Link href="/services">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Servicios')}</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Contacto')}</span>
          </Link>

          <a
            href="https://wa.link/tevkyx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            Chat WhatsApp
          </a>
        </div>

        {/* Icono de menú para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white p-4 mt-4 rounded-lg shadow-lg">
          <Link href="/about">
            <span className="hover:text-gray-300 transition-colors">{t('Nosotros')}</span>
          </Link>
          <Link href="/services">
            <span className="hover:text-gray-300 transition-colors">{t('Servicios')}</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300 transition-colors">{t('Contacto')}</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
