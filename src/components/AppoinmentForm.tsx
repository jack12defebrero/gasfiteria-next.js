// src/components/Form/AppointmentForm.tsx
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cita agendada para: ${name} el ${date}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Agendar Cita</button>
    </form>
  );
};

export default AppointmentForm;
