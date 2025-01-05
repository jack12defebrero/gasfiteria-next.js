import { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; // Importa el componente Navbar
import Footer from '../components/Footer'; // Importa el componente Footer
import '../styles/globals.css'; // Importa tus estilos globales

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className="flex flex-col min-h-screen"> {/* Contenedor principal */}
      <Navbar /> {/* Siempre visible en la parte superior */}
      <main className="flex-grow pt-16"> {/* El contenido se expande para llenar el espacio disponible */}
        <Component {...pageProps} />
      </main>
      <Footer /> {/* Siempre visible en la parte inferior */}
    </div>
  );
}

export default MyApp;
