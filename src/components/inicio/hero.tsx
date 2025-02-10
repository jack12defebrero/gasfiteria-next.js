import { useState } from 'react';
import CarouselLeft from '@/components/CauruselLeft'

const Hero = () => {
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!fullName || !message) {
      setError('Por favor, llena ambos campos.');
      e.preventDefault(); // Evita que el enlace redirija si los campos están vacíos
    } else {
      setError('');
    }
  };

  return (
    <section
    
      className="  text-gray-600 body-font bg-no-repeat bg-cover bg-gray-600 bg-blend-multiply border-b-8 border-indigo-500"
      style={{ backgroundImage: 'url("images/fondo_12.webp")' }}
    >
      
      <div className="pt-11 container px-5  mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font text-6xl text-white m-8 py-12 font-extrabold">
            Soluciones Figueroa
          </h1>
          <h1 className="text-4xl text-white">
            Realizo los siguientes servicios: <span className="type text-red-300" />
          </h1>

          
        </div>
        <div className="transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-5 border-2 border-rose-500 lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Escríbenos</h2>
          <div className="relative mb-4">

      

            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              ¿Cuál es su nombre?
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              value={fullName}
              onChange={handleFullNameChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Menciona el trabajo a realizar:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <a
            id="send-whatsapp"
            href={`https://wa.me/946186285?text=Nombre:%20${encodeURIComponent(fullName)}%20Trabajo:%20${encodeURIComponent(message)}`}
            className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg flex justify-center items-center mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSubmit} // Llamar la función de validación
          >
            Solicitar
          </a>
          <p className="text-xs text-gray-500 mt-3">Será redirigido a WhatsApp.</p>
        </div>
      </div>
         {/*Carrusel izquierdo*/}
   {/*Carrusel izquierdo*/}
   <CarouselLeft />
    </section>
  );
};

export default Hero;
