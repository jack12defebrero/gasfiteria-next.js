import React from 'react';
import { ArrowRight } from 'react-feather'; // Asegúrate de tener esta librería instalada.
 // Asegúrate de que este componente esté correctamente importado

const stats = [
  {
    number: "1500+",
    label: "Clientes Satisfechos",
  },
  {
    number: "5+",
    label: "Años de Experiencia",
  },
  {
    number: "24/7",
    label: "Servicio de Emergencia",
  },
  {
    number: "100%",
    label: "Garantía de Trabajo",
  },
];

const NewHero = () => {
  return (
    <section
      id="inicio"
      className=" border-b-4 rounded-b-[40px]  relative min-h-screen flex items-center bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url('/images/fondo_12.webp')`,
      }}
    >
      <div className="border-b-4 rounded-b-[40px] absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>
      <div className=" container mx-auto px-4 relative ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className=" text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          <p>
          Servicios de Gasfitería Profesional
          </p>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Soluciones profesionales para su hogar las 24 horas del día
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all flex items-center justify-center">
              Solicitar Servicio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-full backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
      <div className=" border-b-4 rounded-b-[40px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className=" container mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
