import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
init("3yBxmHrcYLNM1dc6T");

export const Contacto = () => {
  const form = useRef(),
   navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_uetd9fp', form.current, '3yBxmHrcYLNM1dc6T')
      .then((result) => {
          console.log(result.text);
          navigate('landing')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='contacto'>
           <h2>Si está interesado en trabajar conmigo en su proximo proyecto, no dude en ponerse en contacto</h2>
    <form ref={form} onSubmit={sendEmail}
    className="d-flex flex-column   gap-4 ">
       
      
      <input type="text" name="user_name" placeholder='nombre'/>
      
      <input type="email" name="user_email" placeholder='Correo' />
      <textarea name="message" placeholder='Mensaje' />
      <input type="submit" value="Send" className='btn'/>
    </form>
    </div>
  );
};
