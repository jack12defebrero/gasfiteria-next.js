import { useEffect, useRef } from 'react';

const CertificationsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && carouselRef.current) {
      const ulElement = carouselRef.current.querySelector("ul");
      if (ulElement) {
        // Duplicamos el contenido para lograr el efecto de desplazamiento infinito.
        ulElement.insertAdjacentHTML('afterend', ulElement.outerHTML);
        const clonedElement = ulElement.nextElementSibling;
        if (clonedElement) {
          clonedElement.setAttribute('aria-hidden', 'true');
        }
      }
    }
  }, []);

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <h2 className="text-black text-3xl font-bold mb-8 text-center dark:text-white">
        Contamos con las siguientes certificaciones
      </h2>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-7 py-10">
        <div className="text-center">
          {/* Logo Carousel animation */}
          <div
            ref={carouselRef}
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start space-x-8 animate-[scrollRight_10s_linear_infinite]" aria-hidden="true">
              <li>
                <img src="images/certificaciones/logo-construaprende.png" alt="Construaprende" />
              </li>
              <li>
                <img src="images/certificaciones/LogoSencico.png" alt="Sencico" />
              </li>
              <li>
                <img src="images/certificaciones/tubo_plast.png" alt="Tubo Plast" />
              </li>
              {/* Add more logos here */}
            </ul>
          </div>
          {/* End: Logo Carousel animation */}
        </div>
      </div>
    </main>
  );
};

export default CertificationsCarousel;
