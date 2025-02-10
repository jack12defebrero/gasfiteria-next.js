import React from "react";
import { HoverEffect } from "../components/servicios/servicesnew"; // Asegura la ruta correcta
import Button from "../components/button"; // Asegura que el botón esté correctamente importado

const Servicios: React.FC = () => {
  const servicios = {
    "Instalaciones desde 0": [
      { 
        title: "Instalación de tuberías", 
        description: "Realizamos instalaciones de tuberías para hogares y empresas.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Sistemas de agua", 
        description: "Configuramos sistemas de agua desde cero.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Drenajes", 
        description: "Instalamos drenajes eficientes y duraderos.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Calentadores de agua", 
        description: "Colocamos calentadores según tus necesidades.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Plomería general", 
        description: "Servicios completos de instalación de plomería.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Asesoramiento técnico", 
        description: "Te ayudamos a planificar tus instalaciones.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
    ],
    "Reparaciones de aparatos sanitarios": [
      { 
        title: "Reparación de grifos", 
        description: "Arreglamos grifos con fugas o dañados.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "WC y cisternas", 
        description: "Solucionamos problemas en inodoros y cisternas.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Lavabos", 
        description: "Reparamos lavabos rotos o con fugas.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Tuberías dañadas", 
        description: "Reparamos y sustituimos tuberías deterioradas.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Duchas", 
        description: "Reparamos y mejoramos duchas defectuosas.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
      { 
        title: "Calentadores", 
        description: "Mantenemos y reparamos calentadores de agua.", 
        link: "https://wa.link/tevkyx",
        image: "/images/fondo_12.webp"
      },
    ],
  };

  return (
    <section className="pt-32 bg-gray-50 py-12">
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
                    <div className="flex flex-col h-full">
  <p className="flex-grow">{servicio.description}</p> 
  <div className="mt-5">
    <Button text="Solicita ya!!" link={servicio.link} />
  </div>
</div>
                  </>
                ),
                link: servicio.link,
                image: servicio.image || "/images/fondo_12.webp"
              }))} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            />
          </div>
        ))}
      </div>
    </section>  
  );
};

export default Servicios;
