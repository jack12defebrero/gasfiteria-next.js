import React from "react";
import { HoverEffect } from "../components/servicios/servicesnew"; // Ajusta la ruta según tu proyecto
import Button from "../components/button"; // Asegúrate de que el componente Button esté correctamente configurado

const Servicios: React.FC = () => {
  const servicios = {
    "Instalaciones desde 0": [
      { 
        title: "Instalación de tuberías", 
        description: "Realizamos instalaciones de tuberías para hogares y empresas.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Sistemas de agua", 
        description: "Configuramos sistemas de agua desde cero.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Drenajes", 
        description: "Instalamos drenajes eficientes y duraderos.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Calentadores de agua", 
        description: "Colocamos calentadores según tus necesidades.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Plomería general", 
        description: "Servicios completos de instalación de plomería.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Asesoramiento técnico", 
        description: "Te ayudamos a planificar tus instalaciones.", 
        link: "https://wa.link/tevkyx" 
      },
    ],
    "Reparaciones de aparatos sanitarios": [
      { 
        title: "Reparación de grifos", 
        description: "Arreglamos grifos con fugas o dañados.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "WC y cisternas", 
        description: "Solucionamos problemas en inodoros y cisternas.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Lavabos", 
        description: "Reparamos lavabos rotos o con fugas.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Tuberías dañadas", 
        description: "Reparamos y sustituimos tuberías deterioradas.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Duchas", 
        description: "Reparamos y mejoramos duchas defectuosas.", 
        link: "https://wa.link/tevkyx" 
      },
      { 
        title: "Calentadores", 
        description: "Mantenemos y reparamos calentadores de agua.", 
        link: "https://wa.link/tevkyx" 
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h1>
        {Object.entries(servicios).map(([categoria, items]) => (
          <div key={categoria} className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">{categoria}</h2>
            <HoverEffect 
              items={items.map((servicio) => ({
                title: servicio.title,
                description: (
                  <>
                    <p>{servicio.description}</p>
                    <div className="mt-5">
                      <Button text="Solicita ya!!" link={servicio.link} />
                    </div>
                  </>
                ),
                link: servicio.link,
              }))}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
