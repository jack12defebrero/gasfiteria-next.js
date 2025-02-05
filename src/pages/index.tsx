import React from 'react';
import { ProfileList } from '@/components/inicio/profeli-list';
import NewHero from '@/components/inicio/newhero';
import Articulos from "../components/inicio/articulo";
import NewServices from "../components/inicio/newservices";
import Testimonials from "@/components/inicio/Testimonials";

const SectionComponent = () => {
  return (
    <div>
                                                       
      {/* Contenedor para el héro */}
      <section className="top-[-40px] left-0 right-0">
          <NewHero />
      </section>

      {/* Contenedor para los servicios */}
      <div>
        <NewServices />
      </div>
      
      {/* Contenedor para los artículos */}

 <div className="bottom-10 ">  
  <Articulos />

</div>

      

    
     

      {/* Contenedor para los testimonios */}
      <div>
        <Testimonials />
      </div>



    <div>

    <ProfileList />
    </div>




         {/* Contenedor para la evidencia */}
        
    </div> 
  );
};

export default SectionComponent;
