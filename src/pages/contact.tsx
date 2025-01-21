import React from 'react';
import ContactForm from '../components/contacto/ContactForm';
import NewContact from '../components/contacto/newcontact';

const Contact = () => {
  return (
    <div className=" pt-32 page-container">
      <ContactForm />

      <div>

      <NewContact />
      </div>
    </div>

  );
};

export default Contact;
