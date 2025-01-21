import React from 'react';
import Image from 'next/image';
import { Card } from 'primereact/card';
import Button from '@/components/button';
import TimelineDemo from '@/components/sobreMi/timelineDemo';

const SobreMi: React.FC = () => {
  return (
    <section className=" bg-gray-50 py-12">
      <div className="pt-28 max-w-7xl mx-auto px-4">
        {/* Imagen destacada en el centro */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/fondo_12.webp" // Cambia esta ruta a la imagen deseada
            alt="Gasfitero trabajando"
            className="h-auto rounded-lg shadow-md"
            width={600}
            height={400}
          />
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Información del profesional */}
          <Card className="text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/path-to-avatar.jpg" // Cambia esta ruta al avatar deseado
                  alt="Jampier Figueroa"
                  className="w-24 h-24 rounded-full shadow-md"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-semibold">Jampier Figueroa</h3>
              <p className="text-gray-600 mt-2">
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </Card>

          {/* Descripción detallada */}
          <Card className="col-span-2">
            <h4 className="text-xl font-semibold mb-4">Sobre mí</h4>
            <p className="text-gray-600">
              Meggings portland fingerstache lyft, post-ironic fixie man bun banh
              mi umami everyday carry hexagon locavore direct trade art party.
              Locavore small batch listicle gastropub farm-to-table
              lumbersexual salvia messenger bag.
            </p>
            <Button text="Contactame" link="https://wa.link/tevkyx" />
          </Card>
        </div>
        
      </div>

      {/* Timeline */}
   <div>
    <TimelineDemo />
   </div>
      
   
        
      
    </section>
  );
};

export default SobreMi;
