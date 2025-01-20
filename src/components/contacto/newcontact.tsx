import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const NewContact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone />,
      title: "Teléfono",
      info: "+1 234 567 890",
    },
    {
      icon: <Mail />,
      title: "Email",
      info: "contacto@plomerospro.com",
    },
    {
      icon: <Clock />,
      title: "Horario",
      info: "24/7 - Servicios de Emergencia",
    },
    {
      icon: <MapPin />,
      title: "Ubicación",
      info: "Ciudad Principal, CP 12345",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contacto</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos para una consulta gratuita.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Formulario de contacto */}
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Escribe tu nombre"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Escribe tu email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
