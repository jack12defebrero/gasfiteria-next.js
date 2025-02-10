import React from "react";
import Button from "../button"; // Asegúrate de que este archivo exista

// Datos de los artículos
const articulosData = [
  {
    title: "On A Day Like Today",
    image: "/images/inicio-pagina/1er.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!",
    buttonLink: "https://wa.link/tevkyx",
    buttonText: "Solicita ya!!",
  },
  {
    title: "Another Title",
    image: "/images/inicio-pagina/1er.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!",
    buttonLink: "https://wa.link/tevkyx",
    buttonText: "Solicita ya!!",
  },
  {
    title: "Another Title",
    image: "/images/inicio-pagina/1er.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!",
    buttonLink: "https://wa.link/tevkyx",
    buttonText: "Solicita ya!!",
  },
  {
    title: "Another Title",
    image: "/images/inicio-pagina/1er.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!",
    buttonLink: "https://wa.link/tevkyx",
    buttonText: "Solicita ya!!",
  },
  {
    title: "Another Title",
    image: "/images/inicio-pagina/1er.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!",
    buttonLink: "https://wa.link/tevkyx",
    buttonText: "Solicita ya!!",
  },
];

// Tipos para las propiedades
type ArticuloProps = {
  title: string;
  image: string;
  description: string;
  buttonLink: string;
  buttonText: string;
};

// Componente de artículo individual
const Articulo: React.FC<ArticuloProps> = ({ title, image, description, buttonLink, buttonText }) => (
  <article
    className="  rounded-3xl mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-[150px] transform duration-500 hover:-translate-y-2 cursor-pointer group"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="rounded-3xl bg-black bg-opacity-40 min-h-[150px] px-10 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
      <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
        {title}
      </h1>
      <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
      <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
        {description}
      </p>
      <div className="pb-8">
        <Button link={buttonLink} text={buttonText} />
      </div>
    </div>
  </article>
);

// Componente contenedor de todos los artículos
const Articulos: React.FC = () => {
  return (

    <div className="bg-white py-20  border-b-4 rounded-b-[80px]   ">
      <div className="py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {articulosData.map((articulo) => (
        <Articulo
          key={articulo.title}      
          title={articulo.title}
          image={articulo.image}
          description={articulo.description}
          buttonLink={articulo.buttonLink}
          buttonText={articulo.buttonText}
        />
      ))}
    </div>
    </div>
    
  );
};

export default Articulos;
