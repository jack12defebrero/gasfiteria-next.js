const validateForm = (formData: any, toastRef: any) => {
    let isValid = true;
  
    // Validación de campos vacíos
    if (!formData.nombre) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, ingrese su nombre.',
        life: 3000
      });
      isValid = false;
    }
  
    if (!formData.apellidos) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, ingrese sus apellidos.',
        life: 3000
      });
      isValid = false;
    }
  
    if (!formData.correo) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, ingrese su correo electrónico.',
        life: 3000
      });
      isValid = false;
    } else {
      // Validación de formato de correo
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(formData.correo)) {
        toastRef.current?.show({
          severity: 'error',
          summary: 'Correo inválido',
          detail: 'Por favor, ingrese un correo electrónico válido.',
          life: 3000
        });
        isValid = false;
      }
    }
  
    if (!formData.telefono) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, ingrese su número de teléfono.',
        life: 3000
      });
      isValid = false;
    }
  
    if (!formData.mensaje) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, ingrese su mensaje.',
        life: 3000
      });
      isValid = false;
    }
  
    if (!formData.fechaTrabajo) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Campo requerido',
        detail: 'Por favor, seleccione una fecha de trabajo.',
        life: 3000
      });
      isValid = false;
    }
  
    return isValid;
  };
  
  export default validateForm;
  