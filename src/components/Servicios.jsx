import React from 'react';
import {Section} from "../styles/styles"

export const Servicios = ()=>{
    return(
        <div className='Conte-Servicios'>
            <div className='Servicios-Title'>
            <i className=''>Serv</i>
            <i className=''>icios</i>
            </div>
            <Section className='Servicios-Section'>
                <p>
                    <i class="bi bi-lightning-fill"></i>
                    Interfaz de usuario
                    </p>
                <p>
                    <i class="bi bi-lightning-fill"></i>
                    Aplicaciones web
                </p>
                <p>
                    <i class="bi bi-lightning-fill"></i>
                    Aplicaciones web progresivas
                </p>
                <p>
                    <i class="bi bi-lightning-fill"></i>
                    Aplicaciones moviles
                </p>
            </Section>
        </div>
    )
}