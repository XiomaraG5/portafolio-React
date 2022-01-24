import React from 'react';
import Proyecto1 from './assets/Proyecto1.jpg'
import Proyecto2 from './assets/Proyecto2.jpg'
import Proyecto3 from './assets/Proyecto3.jpg'
import Proyecto4 from './assets/Proyecto4.jpg'

export const Proyectos = ()=>{
    return(
        <div className='ConProyectos'>
            <a href="https://xiomarag5.github.io/pagina-magicshape/" target="_blank" rel="noreferrer">
                <img class="project-image" src={Proyecto1}
                    alt="project" />
                <p class="project-title">
                    <span class="code">&lt;</span>
                    MAGICSHAPE
                    <span class="code">&#47;&gt;</span>
                </p>
            </a>

            <a href="https://xiomarag5.github.io/pagina-magicshape/" target="_blank" rel="noreferrer">
                <img class="project-image" src={Proyecto2}
                    alt="project" />
                <p class="project-title">
                    <span class="code">&lt;</span>
                    Animación
                    <span class="code">&#47;&gt;</span>
                </p>
            </a>

            <a href="https://xiomarag5.github.io/Documentacion-Tecnica/" target="_blank" rel="noreferrer" >
                <img class="project-image" src={Proyecto3}
                    alt="project" />
                <p class="project-title">
                    <span class="code">&lt;</span>
                    Documentación Tecnica
                    <span class="code">&#47;&gt;</span>
                </p>
            </a>

            <a href="https://xiomarag5.github.io/paginaAterrizaje/" target="_blank" rel="noreferrer" >
                <img class="project-image" src={Proyecto4}
                    alt="project" />
                <p class="project-title">
                    <span class="code">&lt;</span>
                    Pagina de aterrizaje
                    <span class="code">&#47;&gt;</span>
                </p>
            </a>

        </div>
    )
}