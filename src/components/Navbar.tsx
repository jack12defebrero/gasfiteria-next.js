import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image'; // Componente Image de Next.js

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Diccionario con clases para los estados de scrolled
  const classNames = {
    link: scrolled
      ? 'text-gray-600 hover:text-blue-600'
      : 'text-white/90 hover:text-white',
    button: scrolled
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    nav: scrolled
      ? 'bg-white bg-opacity-80 shadow-md backdrop-blur-lg'  // Fondo blanco con opacidad y blur
      : 'bg-gray-800 backdrop-blur-sm',  // Fondo transparente con blur
    menuButton: 'md:hidden flex items-center p-2 rounded-full bg-blue-600',  // Fondo sólido azul en móviles
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${classNames.nav} 
        ${scrolled && !isMenuOpen ? 'shadow-md' : ''} 
        ${isMenuOpen ? '' : 'lg:my-8 lg:mx-24 lg:rounded-full'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/Logo_jean-transparente.png"
                alt="Logo de Soluciones Figueroa"
                width={32}
                height={32}
              />
              <span
                className={`text-2xl font-bold transition-colors ${
                  scrolled || isMenuOpen ? 'text-blue-600' : 'text-white'
                }`}
              >
                IISS
              </span>
            </div>
          </Link>
        </div>

        {/* Menú de navegación (desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span className={classNames.link}>{t('Inicio')}</span>
          </Link>
          <Link href="/about">
            <span className={classNames.link}>{t('Nosotros')}</span>
          </Link>
          <Link href="/services">
            <span className={classNames.link}>{t('Servicios')}</span>
          </Link>
          <Link href="/contact">
            <span className={classNames.link}>{t('Contacto')}</span>
          </Link>
        </div>

        {/* Botón de llamada */}
        <a
          href="https://wa.link/tevkyx"
          className={`hidden md:block px-6 py-2 rounded-full transition-all ${classNames.button}`}
        >
          Llamar Ahora
        </a>

        {/* Menú móvil */}
        <div className={classNames.menuButton}>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
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

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <Link href="/">
            <span className="hover:text-gray-300 transition-colors">{t('Inicio')}</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-gray-300 transition-colors">{t('Nosotros')}</span>
          </Link>
          <Link href="/services">
            <span className="hover:text-gray-300 transition-colors">{t('Servicios')}</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300 transition-colors">{t('Contacto')}</span>
          </Link>

          {/* Enlace a WhatsApp en el menú móvil */}
          <a
            href="https://wa.link/tevkyx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
