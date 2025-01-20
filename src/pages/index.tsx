import React from 'react';
import Hero from '../components/inicio/hero';
import NewHero from '@/components/inicio/newhero';
import Evidencia from '../components/inicio/evidencia';
import Articulos from "../components/inicio/articulo";
import ServicesGrid from '../components/servicios/ServicesGrid';
import NewServices from "../components/inicio/newservices";
const SectionComponent = () => {
  return (
    <div>
      {/* Contenedor para el héro */}
      <NewHero />
      {/* Contenedor para los artículos */}
      <Articulos />

      {/* Contenedor para los servicios */}
      <div>
        <NewServices />
      </div>
      
     
   {/* Contenedor para los servicios */}
   <div className="py-10">
        <ServicesGrid />
      </div>

         {/* Contenedor para la evidencia */}
         <div className="py-10">
        <Evidencia />

      </div>
    </div> 
  );
};

export default SectionComponent;
