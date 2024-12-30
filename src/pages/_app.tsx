// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; // Importa el componente Navbar
import '../styles/globals.css'; // Asegúrate de que tus estilos globales estén importados

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar /> {/* El Navbar estará disponible en todas las páginas */}
      <Component {...pageProps} /> {/* El contenido de cada página */}
    </div>
  );
}

export default MyApp;
