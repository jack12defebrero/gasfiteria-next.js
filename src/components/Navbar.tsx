// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Sobre mí</Link>
      </li>
      <li>
        <Link href="/services">Servicios</Link>
      </li>
      <li>
        <Link href="/contact">Contacto</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
