// components/inicio/hero.tsx

const Hero = () => {
    return (
      <section
        className="text-gray-600 body-font bg-no-repeat bg-cover bg-gray-600 bg-blend-multiply border-b-8 border-indigo-500"
        style={{ backgroundImage: 'url("images/fondo_12.jpg")' }}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font text-6xl text-white m-8 py-12 font-extrabold">
              Soluciones figueroa
            </h1>
            <h1 className="text-4xl text-white">
              realizo los siguientes servicios: <span className="type text-red-300" />
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
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <div id="user-message" className="text-gray-700 mb-4" />
            <button
              id="send-whatsapp"
              className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Solicitar
            </button>
            <p className="text-xs text-gray-500 mt-3">Será redirigido a WhatsApp.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  