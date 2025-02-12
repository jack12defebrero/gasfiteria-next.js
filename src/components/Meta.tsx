import Head from "next/head";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();

  // Títulos personalizados por página
  const titles: Record<string, string> = {
    "/": "Inicio",
    "/contact": "Contacto",
    "/about": "Sobre Mí",
    "/services": "Servicios",
  };

  const pageTitle = titles[router.pathname] || "Página";
  const fullTitle = `ISS | ${pageTitle}`;

  return (
    <Head>
  <title>{fullTitle}</title>
  <meta name="description" content={`Página de ${pageTitle} en ISS`} />
  <meta name="keywords" content="gasfitería, fontanería, Lima, reparación de tuberías, desatoros, fugas de agua" />
  <meta name="author" content="Tu Nombre o Empresa" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph (Facebook, WhatsApp) */}
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={`Conoce más sobre nuestra página de ${pageTitle}.`} />
  <meta property="og:image" content="https://gasfiteria-next-js.vercel.app/imagen.jpg" />
  <meta property="og:url" content="https://gasfiteria-next-js.vercel.app/es" />
  <meta property="og:type" content="website" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={`Conoce más sobre nuestra página de ${pageTitle}.`} />
  <meta name="twitter:image" content="https://gasfiteria-next-js.vercel.app/imagen.jpg" />
  <meta name="twitter:site" content="@TuUsuarioTwitter" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

  );
};

export default Meta;
