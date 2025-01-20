import React from 'react';
import Image from 'next/image'; // Importa Image desde next/image

const ServicesGrid = () => {
  const services = [
    {
      title: 'Transporte',
      description: 'Resumen Transporte',
      image: '/images/inicio-pagina/1er.webp',
      imageWidth: 400, // Ancho en píxeles
      imageHeight: 450, // Altura en píxeles
    },
    {
      title: 'Protección Ejecutiva',
      description: 'Resumen Protección Ejecutiva',
      image: '/images/inicio-pagina/1er.webp',
      imageWidth: 400, // Ancho en píxeles
      imageHeight: 450, // Altura en píxeles
    },
    {
      title: 'Protección Ejecutiva',
      description: 'Resumen Protección Ejecutiva',
      image: '/images/inicio-pagina/1er.webp',
      imageWidth: 400, // Ancho en píxeles
      imageHeight: 450, // Altura en píxeles
    },
    {
      title: 'Protección Ejecutiva',
      description: 'Resumen Protección Ejecutiva',
      image: '/images/inicio-pagina/1er.webp',
      imageWidth: 400, // Ancho en píxeles
      imageHeight: 450, // Altura en píxeles
    },
  ];

  return (
    <div className="space-y-10">
      {services.map((service, index) => (
        <div key={index} className={`flex justify-center`}>
          {/* Contenedor principal alargado */}
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            } items-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full`}
            style={{ maxWidth: '90%' }}
          >
            {/* Contenedor del texto */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
            {/* Contenedor de la imagen */}
            <div className="md:w-1/2 p-8 flex justify-center">
              <Image
                src={service.image}
                alt={service.title}
                width={service.imageWidth} // Ancho de la imagen
                height={service.imageHeight} // Altura de la imagen
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
