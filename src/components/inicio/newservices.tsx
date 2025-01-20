import React, { useEffect, useState } from "react";
import {
  Mail,
  Clock,
  MapPin,
  Wrench,
  Droplet,
  Search,
  Shield,
} from "lucide-react";

const NewServices: React.FC = () => {
  const [,setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Reparación de Tuberías",
      description:
        "Solución rápida y profesional para todo tipo de fugas y roturas en tuberías. Servicio de emergencia disponible 24/7.",
    },
    {
      icon: <Droplet className="w-12 h-12 text-blue-600" />,
      title: "Instalación de Grifería",
      description:
        "Instalación y mantenimiento profesional de grifos, válvulas y accesorios para baño y cocina.",
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Detección de Fugas",
      description:
        "Utilizamos tecnología avanzada para detectar fugas ocultas y prevenir daños mayores en su propiedad.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Instalación de Calentadores",
      description:
        "Instalación, reparación y mantenimiento de calentadores de agua de todas las marcas.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Mantenimiento Preventivo",
      description:
        "Programas de mantenimiento regular para prevenir problemas y extender la vida útil de sus instalaciones.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Instalaciones Sanitarias",
      description:
        "Servicios completos de instalación y renovación de baños, cocinas y sistemas sanitarios.",
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Desatascos",
      description:
        "Limpieza profesional de tuberías y desagües obstruidos con equipos especializados.",
    },
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Asesoría Técnica",
      description:
        "Consultoría experta para proyectos de plomería y recomendaciones personalizadas.",
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales para todas sus necesidades de plomería
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"></div>
              <div className="mb-4 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
