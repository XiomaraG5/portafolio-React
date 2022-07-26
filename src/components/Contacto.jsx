import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export const Contacto = () => {
 const  navigate = useNavigate(),
        [show, setShow] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_0xosako', e.target, '3yBxmHrcYLNM1dc6T')
      .then((result) => {
          console.log(result.text);
          setShow(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='contacto'>
           <h2>Si está interesado en trabajar conmigo en su proximo proyecto, no dude en ponerse en contacto</h2>
           <Alert show={show} >
              <Alert.Heading>Gracias por su mensaje!</Alert.Heading>
              <p>
                Me pondré en contacto en el trascurso de las proximas 24 horas
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <button className='btn p-1' onClick={() => {setShow(false); navigate('landing')}}>
                  Entiendo!
                </button>
              </div>
          </Alert>
    <form  onSubmit={sendEmail}
    className="d-flex flex-column   gap-4 ">
       
      
      <input type="text" name="user_name" placeholder='nombre'/>
      
      <input type="email" name="user_email" placeholder='Correo' />
      <textarea name="user_message" placeholder='Mensaje' />
      <input type="submit" value="Send" className='btn'/>
    </form>
    
    </div>
  );
};
