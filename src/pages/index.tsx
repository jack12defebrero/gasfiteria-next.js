import React from 'react';
import NewHero from '@/components/inicio/newhero';
import Evidencia from '../components/inicio/evidencia';
import Articulos from "../components/inicio/articulo";
import ServicesGrid from '../components/servicios/ServicesGrid';
import NewServices from "../components/inicio/newservices";

const SectionComponent = () => {
  return (
    <div>
      {/* Contenedor para el héro */}
      <section className="top-[-40px] left-0 right-0">
          <NewHero />
      </section>
    
      {/* Contenedor para los artículos */}

 <div className="bottom-10 ">  
  <Articulos />

</div>

      

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
