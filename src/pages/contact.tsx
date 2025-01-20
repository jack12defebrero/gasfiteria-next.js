import React from 'react';
import ContactForm from '../components/contacto/ContactForm';
import NewContact from '../components/contacto/newcontact';

const Contact = () => {
  return (
    <div className="page-container">
      <ContactForm />

      <div>

      <NewContact />
      </div>
    </div>

  );
};

export default Contact;
