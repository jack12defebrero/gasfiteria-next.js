// components/inicio/Articulo.tsx

type ArticuloProps = {
    title: string;
    image: string;  // Se espera que la imagen sea una URL.
    description: string;
    buttonLink: string;
    buttonText: string;
  };
  
  const Article = ({ title, image, description, buttonLink, buttonText }: ArticuloProps) => (
    <article
      className="rounded-3xl mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="rounded-3xl bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
          {title}
        </h1>
        <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {description}
        </p>
        <a className="pb-8" href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="rounded-md mt-2 md:mt-5 p-3 px-5 bg-slate-400 text-white font-bold text-sm hover:bg-purple-800">
            {buttonText}
          </button>
        </a>
      </div>
    </article>
  );
  
  export default Article;
  