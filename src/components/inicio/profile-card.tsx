"use client";

import { Profile } from "@/data/profiles";
import Image from "next/image";

interface ProfileCardProps extends Profile {
  isReversed?: boolean;
}

export function ProfileCard({
  name,
  role,
  company,
  image,
  skills,
  bio,
  isReversed = false,
}: ProfileCardProps) {
  return (
    <div className="flex items-center justify-center    p-4">
      <div
        className={`flex flex-col sm:flex-row max-w-[1245px] ${
          isReversed ? "sm:flex-row-reverse" : ""
        } items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-white rounded-2xl shadow-xl max-w-3xl w-full transition-transform hover:scale-105`}
      >
        {/* Image Section */}
        <div className="w-full sm:w-[40%] overflow-hidden rounded-xl shadow-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name}'s profile`}
            width={324}
            height={324}
            className="w-full h-full object-cover"
            priority={true} // Mejora el rendimiento para imágenes importantes
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 text-center sm:text-left">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{name}</h2>
            <p className="text-base sm:text-lg text-gray-600">
              {role} at <span className="font-semibold text-primary">{company}</span>
            </p>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Bio */}
          {bio && (
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {bio}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4">
            <button className="px-5 py-2 text-white bg-primary hover:bg-primary/90 rounded-full shadow-md transition-colors">
              Contactar
            </button>
            <button className="px-5 py-2 text-primary border border-primary rounded-full shadow-md hover:bg-primary/10 transition-colors">
              Ver perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
