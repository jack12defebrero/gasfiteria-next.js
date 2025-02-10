import React from 'react';
import Image from 'next/image';

// Lista de imágenes para los items
const leftImages = [
  '/images/log_trabajo/inmobi_marte.webp',
  '/images/log_trabajo/grupo tyc.webp',
  '/images/log_trabajo/jcc-constructora-3.webp',
  '/images/log_trabajo/logo_mobile.webp',
  '/images/log_trabajo/logo-barqueros.webp',
];

const rightImages = [
  '/images/certificaciones/LogoSencico.png',
  '/images/certificaciones/logo-construaprende.png',
  '/images/certificaciones/tubo_plast.png',
];

const SlidingItems: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <p className="text-xl text-center font-semibold text-white mb-4">Trabajé en las siguientes empresas</p>
      <div className="wrapper flex overflow-hidden">
        {/* Renderizamos las imágenes de la izquierda */}
        {leftImages.map((image, index) => (
          <div key={index} className={`itemLeft item${index + 1} animate-slide-left mr-4`}>
            <Image
              className="w-auto h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              src={image}
              alt={`Item Left ${index + 1}`}
              width={150} // Ancho ajustado para que las imágenes tengan un tamaño fijo
              height={150} // Alto ajustado para mantener la proporción
            />
          </div>
        ))}
      </div>

      <p className="text-xl text-center font-semibold text-white mt-8 mb-4">Cuento con las siguientes certificaciones</p>
      <div className="wrapper flex overflow-hidden mt-6">
        {/* Renderizamos las imágenes de la derecha */}
        {rightImages.map((image, index) => (
          <div key={index} className={`itemRight item${index + 1} animate-scrollRight mr-4`}>
            <Image
              className="w-auto h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              src={image}
              alt={`Item Right ${index + 1}`}
              width={150} // Ajusta el tamaño de las imágenes
              height={150} // Ajusta el tamaño de las imágenes
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingItems;
