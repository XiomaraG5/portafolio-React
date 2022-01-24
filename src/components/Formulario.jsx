import React from 'react';
import { Btn, SectionCol } from '../styles/styles';


export const Formulario = () => {
    return (
        <SectionCol className='Formulario-Interes'>
            <h3>Contacto</h3>
            <p>
                Si está interesado en trabajar conmigo en su proximo proyecto,
                no dude en ponerse en contacto
            </p>
            <form className='formulario'>
                <input type="text" name='name' placeholder='Nombre completo' />
                <input type="email" name='email' placeholder='Correo electronico' />
                <textarea name="mensaje" placeholder='Mensaje' ></textarea>
                <Btn className='btn'>Enviar mensaje</Btn>
            </form>
        </SectionCol>
    )
}