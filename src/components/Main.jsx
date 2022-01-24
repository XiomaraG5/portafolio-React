import React from 'react';
import { Btn, Section, SectionCol } from '../styles/styles';
import Image from "./assets/insta1.jpg"


export const Main = () => {
    return (
        <Section>
            <SectionCol className='Section-div'>
                <SectionCol>
                    <h3 className='H3'>Me encanta implementar diseños
                        que inspiran y atraen a las personas.
                    </h3>
                    <p>Soy  Junior Frontend Developer, al descubrir
                        la programación quedé enamorada de la comunidad,
                        la creatividad y la posibilidad de impactar en la sociedad.
                    </p>
                </SectionCol>
                <SectionCol>
                    <p className=''>
                        En mi experiencia he tenido la oprtunidad de trabajar en proyectos increibles,
                        actualmente cuento con el manejo de tecnologias como: 
                    </p>
                    <ul className=' listaTech'>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            HTML, CSS3, Bootstrap.
                            </li>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            Grid CSS, Flex CSS.
                        </li>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            JavaScript vanilla
                        </li>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            Consumo de APIs con JavaScript 
                        </li>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            React native
                        </li>
                        <li>
                            <i class="bi bi-lightning-fill"></i>
                            Control de versiones con GiT
                        </li>
                    </ul>
                </SectionCol>
                <Btn className='btn'>Downlowd cv</Btn>
            </SectionCol >
            <div className='Section-div Section-foto'>
                <img className='Foto' src={Image} alt="XiomG" />
            </div>
        </Section>
    )
}