import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import Diver from './diver';
import validateForm from './validateForm'; // Importar la función de validación

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    mensaje: '',
    fechaTrabajo: null as Date | null
  });

  const toastRef = React.useRef<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    setFormData({ ...formData, fechaTrabajo: e.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación usando la función importada
    if (validateForm(formData, toastRef)) {
      const mensaje = `
        Nombre: ${formData.nombre}
        Apellidos: ${formData.apellidos}
        Correo: ${formData.correo}
        Teléfono: ${formData.telefono}
        Mensaje: ${formData.mensaje}
        Fecha de trabajo: ${formData.fechaTrabajo?.toLocaleDateString()}
      `;

      const mensajeCodificado = encodeURIComponent(mensaje);

      const numeroWhatsapp = '+51946186285';
      const enlaceWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeCodificado}`;

      toastRef.current?.show({
        severity: 'info',
        summary: 'Enviando mensaje',
        detail: 'Se abrirá WhatsApp para enviar el mensaje.',
        life: 3000
      });

      setTimeout(() => {
        window.open(enlaceWhatsapp, '_blank');
      }, 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <Toast ref={toastRef} />

      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Diver
          label="Nombre"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <Diver
          label="Apellidos"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />

        <Diver
          label="Correo electrónico"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <Diver
          label="Teléfono"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <Diver
          label="Mensaje"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={4}
        />

        <div className="field">
          <label htmlFor="fechaTrabajo" className="block text-lg font-medium text-gray-700">
            Fecha de trabajo
          </label>
          <Calendar
            id="fechaTrabajo"
            name="fechaTrabajo"
            value={formData.fechaTrabajo}
            onChange={handleDateChange}
            dateFormat="dd/mm/yy"
            showIcon
            className="w-full p-inputtext p-component mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <Button
          type="submit"
          label="Enviar"
          icon="pi pi-send"
          className="w-full p-button p-button-primary p-3 mt-4 rounded-lg hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

export default ContactForm;
