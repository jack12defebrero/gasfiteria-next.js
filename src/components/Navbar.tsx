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
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo o nombre */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/">
            {t('Inicio')}
          </Link>
        </div>

        {/* Menú de navegación en desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Nosotros')}</span>
          </Link>
          <Link href="/services">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Servicios')}</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300 transition-colors">{t('Contacto')}</span>
          </Link>
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
