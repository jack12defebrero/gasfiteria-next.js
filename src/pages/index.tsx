import React from 'react';
import Hero from '../components/inicio/hero';
import Articulo from '../components/inicio/articulo';
import Evidencia from '../components/inicio/evidencia';
import CarouselRight from '@/components/CarouselRight';

const SectionComponent = () => {
  return (
    <div>
      <Hero />


      {/* Contenedor para los artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        <Articulo
          title="On A Day Like Today"
          image="./src/img/inicio-pagina/1er.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!"
          buttonLink="https://wa.link/tevkyx"
          buttonText="Solicita ya!!"
        />
        <Articulo
          title="Another Title"
          image="./src/img/inicio-pagina/2do.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!"
          buttonLink="https://wa.link/tevkyx"
          buttonText="Solicita ya!!"
        />
        <Articulo
          title="Yet Another Title"
          image="./src/img/inicio-pagina/3ro.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!"
          buttonLink="https://wa.link/tevkyx"
          buttonText="Solicita ya!!"
        />
      </div>

         {/* Contenedor para la evidencia */}
         <div className="py-10">
        <Evidencia />
      </div>

  {/* Coloca el carrusel en donde desees */}
  <CarouselRight />
    </div> 
  );
};

export default SectionComponent;
