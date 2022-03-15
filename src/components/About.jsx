import React from 'react'
import foto from './assets/insta1.jpg'
import Cv from './assets/XiomaraG-CV.pdf'
export const About = () => {
  return (
    <div className='about'>
        <h2>Me encanta implentar diseños que inspiran y atraen a las personas</h2>
        <div className='descripcion d-flex'>
            <div className='pp'>
                <p>
                Soy junior Fronend Developer, al descubrir la programación quedé enamorada
                de la comunidad, la creatividad y la posibilidad de impactar en la sociedad
                </p>
                <p>Actualmente me ubico en Medellin-Colombia y trabajo en la empresa Gaby-Parrot</p>
            </div>
            <div className='des-foto'>
                <img src={foto} alt='Foto'/>
            </div>
        </div>
        <h3>Tecnologias que manejo:</h3>
        <div className='tecnologias'>
            <p><i className="bi bi-lightning-fill"></i> HTML, CSS3, Sass, Boostrap, Chackra</p>
            <p><i className="bi bi-lightning-fill"></i>Grid CSS, Flex CSS </p>
            <p><i className="bi bi-lightning-fill"></i> JavaScript vanilla</p>
            <p><i className="bi bi-lightning-fill"></i> Consumo de APIs con JavaScript</p>
            <p><i className="bi bi-lightning-fill"></i> React.js</p>
            <p><i className="bi bi-lightning-fill"></i>Control de versiones con GiT. GitHub </p>
            <p><i className="bi bi-lightning-fill"></i> Redux</p>
            <p><i className="bi bi-lightning-fill"></i> Friebase</p>
        </div>
        <a href={Cv} download={`${Cv}`} target="_blank" rel="noreferrer"
        className='btn p-1'>Descargar Cv</a>
    </div>
  )
}
