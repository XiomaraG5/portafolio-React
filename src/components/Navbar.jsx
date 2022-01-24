import React, { Component } from 'react';
import { AboutMe,  Navegador} from '../styles/styles';

export default class Navbar extends Component {


    render() {
        return (
            <div className='encabezado'>
                <Navegador>
                        <p>LOGO</p>
                        <div className='menuNav'>
                            <i>Hola</i>
                            <i>Proyectos</i>
                            <i>Contacto</i>
                        </div>
                </Navegador>
                <AboutMe>
                    <h1 className='AboutMeName'>¡Hola, Soy Xiomara Garcia!</h1>
                    <p className='AboutMeRole'>Front-end Developer</p>
                </AboutMe>
            </div>
        )
    }
}
