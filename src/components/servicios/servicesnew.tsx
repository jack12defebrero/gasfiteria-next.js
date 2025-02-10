import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // ✅ Importar `next/image`

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: React.ReactNode;
    link: string;
    image: string;
  }[];
  className?: string;
  
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              <p>{item.description}</p>
             
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent group-hover:border-slate-700 relative z-20 shadow-lg p-4 flex"
      )}
    >
      {/* Imagen optimizada con `next/image` */}
      <div className="w-1/3 h-full relative">
        <Image 
          src={image} 
          alt="Servicio" 
          layout="fill" // ✅ Optimización automática de tamaño
          objectFit="cover" // ✅ Evita distorsiones
          className="rounded-2xl"
        />
      </div>

      {/* Contenedor de texto */}
      <div className="w-2/3 p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h4 className="text-black font-bold tracking-wide mt-4 text-lg">
      {children}
    </h4>
  );
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-2 text-gray-600 tracking-wide leading-relaxed text-sm">
      {children}
    </div>
  );
};
