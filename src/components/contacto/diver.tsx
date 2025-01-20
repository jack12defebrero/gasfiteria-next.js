// diver.tsx
import React from 'react';

// Definir la interfaz para las propiedades del componente Diver
interface DiverProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  rows?: number;
}

const Diver: React.FC<DiverProps> = ({ label, rows, ...props }) => {
  const InputComponent = rows ? 'textarea' : 'input';
  
  return (
    <div className="field">
      <label htmlFor={props.id} className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <InputComponent
        {...props}
        rows={rows}
        className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Diver;