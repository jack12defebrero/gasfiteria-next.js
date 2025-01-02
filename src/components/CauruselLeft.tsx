import React from 'react';

// Lista de imágenes para los items
const leftImages = [
  '/images/log_trabajo/inmobi_marte.png',
  '/images/log_trabajo/grupo tyc.svg',
  '/images/log_trabajo/jcc-constructora-3.png',
  '/images/log_trabajo/logo_mobile.svg',
  '/images/log_trabajo/logo-barqueros.svg',
];

const rightImages = [
  '/images/certificaciones/LogoSencico.png',
  '/images/certificaciones/logo-construaprende.png',
  '/images/certificaciones/tubo_plast.png',
];

const SlidingItems: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4">
      <p className="text-xl text-center font-semibold text-gray-800 mb-4">Trabajé en las siguientes empresas</p>
      <div className="wrapper flex overflow-hidden">
        {/* Renderizamos las imágenes de la izquierda */}
        {leftImages.map((image, index) => (
          <div key={index} className={`itemLeft item${index + 1} animate-slide-left mr-4`}>
            <img className="w-auto h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src={image} alt={`Item Left ${index + 1}`} />
          </div>
        ))}
      </div>

      <p className="text-xl text-center font-semibold text-gray-800 mt-8 mb-4">Cuento con las siguientes certificaciones</p>
      <div className="wrapper flex overflow-hidden mt-6">
        {/* Renderizamos las imágenes de la derecha */}
        {rightImages.map((image, index) => (
          <div key={index} className={`itemRight item${index + 1} animate-scrollRight mr-4`}>
            <img className="w-auto h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src={image} alt={`Item Right ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingItems;
