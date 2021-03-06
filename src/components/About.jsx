import React from 'react'
import foto from './assets/insta1.jpg'
import Cv from './assets/Cv-Xiomara.pdf'
export const About = () => {
  return (
    <div className='about'>
        <h2>Me encanta implentar diseños que inspiran y atraen a las personas</h2>
        <div className='descripcion d-flex'>
            <div className='pp'>
                <p>
                Soy Fronend Developer, al descubrir la programación quedé enamorada
                de la comunidad, la creatividad y la posibilidad de impactar en la sociedad
                <br />
                En cuanto a mis intereses, me gusta capacitarme constantemente,
                 retarme a mi misma, mejorar mis habilidades blandas, ayudar a las personas y disfrutar del proceso.
                Actualmente me estoy capacitando como desarrolladora fullStack con node, mongoDB, express y mySql.
                </p>
                <p>Actualmente me ubico en Medellin-Colombia</p>
            </div>
            <div className='des-foto'>
                <img src={foto} alt='Foto'/>
            </div>
        </div>
        <h3>Tecnologias que manejo:</h3>
        <div className='tecnologias'>
            <p><i className="bi bi-lightning-fill"></i> HTML, CSS3, Sass, Boostrap, Chackra</p>
            <p><i className="bi bi-lightning-fill"></i> Grid CSS, Flex CSS </p>
            <p><i className="bi bi-lightning-fill"></i> JavaScript vanilla</p>
            <p><i className="bi bi-lightning-fill"></i> Consumo de APIs con JavaScript</p>
            <p><i className="bi bi-lightning-fill"></i> React.js</p>
            <p><i className="bi bi-lightning-fill"></i>Control de versiones con GiT. GitHub </p>
            <p><i className="bi bi-lightning-fill"></i> Redux</p>
            <p><i className="bi bi-lightning-fill"></i> Friebase</p>
            <p><i className="bi bi-lightning-fill"></i> Strapi</p>
            <p><i className="bi bi-lightning-fill"></i> React-native</p>
            <p><i className="bi bi-lightning-fill"></i> Familiaridad con Figma</p>
            {/* <p><i className="bi bi-lightning-fill"></i> node.js</p> */}
        </div>
        <a href={Cv} download={`${Cv}`} target="_blank" rel="noreferrer"
        className='btn p-1'>Descargar Cv</a>
    </div>
  )
}
