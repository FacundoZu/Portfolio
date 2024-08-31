// src/components/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("moqgbgow");
  if (state.succeeded) {
    return <p className="thank-you-message">¡Gracias por tu mensaje!</p>;
  }
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="error-message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="error-message"
          />
        </div>
        <button type="submit" disabled={state.submitting} className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
