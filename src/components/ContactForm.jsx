import React from 'react';

function ContactForm() {
  return (
    <form className="form-contacto">
      <label>NOME:</label>
      <input type="text" />
      
      <label>E-MAIL:</label>
      <input type="email" />
      
      <label>MENSAGEM:</label>
      <textarea rows="4"></textarea>
      <button type="button">Enviar</button>
    </form>
  );
}

export default ContactForm;