import { MutableRefObject } from 'react';
import { Toast } from 'primereact/toast';

// Definir la interfaz FormData que coincida con la del componente
export interface FormData {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  mensaje: string;
  fechaTrabajo: Date | null;
}

const validateForm = (data: FormData, toastRef: MutableRefObject<Toast | null>): boolean => {
  if (!data.nombre.trim()) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'El nombre es requerido',
      life: 3000,
    });
    return false;
  }

  if (!data.apellidos.trim()) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Los apellidos son requeridos',
      life: 3000,
    });
    return false;
  }

  if (!data.correo.trim()) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'El correo es requerido',
      life: 3000,
    });
    return false;
  }

  // Validar formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.correo)) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'El formato del correo no es válido',
      life: 3000,
    });
    return false;
  }

  if (!data.telefono.trim()) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'El teléfono es requerido',
      life: 3000,
    });
    return false;
  }

  if (!data.mensaje.trim()) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'El mensaje es requerido',
      life: 3000,
    });
    return false;
  }

  if (!data.fechaTrabajo) {
    toastRef.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'La fecha de trabajo es requerida',
      life: 3000,
    });
    return false;
  }

  return true;
};

export default validateForm;