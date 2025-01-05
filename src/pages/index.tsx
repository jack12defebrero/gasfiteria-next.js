import React from 'react';
import Hero from '../components/inicio/hero';
import Evidencia from '../components/inicio/evidencia';
import Articulos from "../components/inicio/articulo";
const SectionComponent = () => {
  return (
    <div>
      {/* Contenedor para el héro */}
      <Hero  />
      {/* Contenedor para los artículos */}
      <Articulos />

         {/* Contenedor para la evidencia */}
         <div className="py-10">
        <Evidencia />

      </div>
    </div> 
  );
};

export default SectionComponent;
