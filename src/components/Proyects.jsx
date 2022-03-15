import React from 'react';
import Proyecto1 from './assets/Proyecto1.jpg'
import Proyecto3 from './assets/proyecto6.jpg'
import Proyecto4 from './assets/proyecto7.jpg'

export const Proyectos = ()=>{
    return(
        <div className='ConProyectos'>
            <h2 className='w-100'>PROYECTOS</h2>
            <a href="https://demo-day-projects-magicshape-qfuol5bzc-garcias-team.vercel.app" target="_blank" rel="noreferrer">
                <img className="project-image" src={Proyecto4}
                    alt="project" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    MAGICSHAPE
                    <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a href="https://block-masterl-pk1ocv1x2-xiomarag5.vercel.app" target="_blank" rel="noreferrer">
                <img className="project-image" src={Proyecto3}
                    alt="project" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    App Peliculas
                    <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a href="https://xiomarag5.github.io/pagina-magicshape/" target="_blank" rel="noreferrer">
                <img className="project-image" src={Proyecto1}
                    alt="project" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Maqueta
                    <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a href="https://github.com/XiomaraG5" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Click aquí para ver todos los proyectos
                    <span className="code">&#47;&gt;</span>
                </p>
            </a>

        </div>
    )
}