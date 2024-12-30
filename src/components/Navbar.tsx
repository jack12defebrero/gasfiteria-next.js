interface NavbarProps {
    onNavigate: (page: string) => void;
  }
  
  const Navbar = ({ onNavigate }: NavbarProps) => {
    return (
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("about")}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("services")}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Servicios
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("contact")}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  