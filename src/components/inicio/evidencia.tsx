import React, { useState } from "react";
import Image from "next/image";

const Evidencia: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-5 rounded-3xl">
        {/* Modal image component */}
        <div className="[&_[x-cloak]]:hidden">
          {/* Image thumbnail */}
          <button
            className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
            onClick={openModal}
            aria-controls="modal"
            aria-label="View the image"
          >
            <Image
              className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
              src="/images/fondo_12.jpg"
              alt="Modal image thumbnail"
              width={600}
              height={400}
            />
            {/* View icon */}
            <svg
              className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
            >
              <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
              <path
                className="fill-indigo-500 drop-shadow-2xl"
                d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
              />
            </svg>
          </button>
          {/* End: Image thumbnail */}

          {/* Modal backdrop */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
              onClick={closeModal}
              aria-hidden="true"
            ></div>
          )}
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          {modalOpen && (
            <div
              id="modal"
              className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6 transition-all opacity-100"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="max-w-5xl mx-auto h-full flex items-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal if clicked inside
              >
                <div className="w-full max-h-full rounded-3xl shadow-2xl bg-black overflow-hidden">
                  <Image
                    src="/images/fondo_12.jpg"
                    alt="Full-screen image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
          {/* End: Modal dialog */}
        </div>
        {/* End: Modal image component */}

        <div className="rounded-3xl content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p>servicios de reparaciones</p>
            <p className="text-gray-400">2024</p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">reparaciones</h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis
            minus rem adipisci aliquid.
          </p>
          <a href="https://wa.link/tevkyx" target="_blank" rel="noopener noreferrer">
            <button className="rounded-md mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Solicita ya!!
            </button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Evidencia;
