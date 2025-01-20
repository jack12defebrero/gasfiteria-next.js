import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

interface DiverProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required: boolean;
  errorMessage?: string;
  rows?: number;
}

const Diver: React.FC<DiverProps> = ({ label, id, name, value, onChange, required, errorMessage, rows }) => {
  const isTextarea = rows !== undefined;

  return (
    <div className="p-field">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      {isTextarea ? (
        <InputTextarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={`p-inputtextarea-sm w-full border-2 p-3 mt-2 rounded-lg ${errorMessage ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      ) : (
        <InputText
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`p-inputtext-sm w-full border-2 p-3 mt-2 rounded-lg ${errorMessage ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      )}
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Diver;
