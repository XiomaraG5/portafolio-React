import React from 'react'
import {  NavLink } from 'react-router-dom'

export const Menu = ({setMenu}) => {
  return (
    <div className='menu d-flex flex-column'>
        <i className="bi bi-x-octagon" onClick={()=>setMenu(false)}></i>
        <div className='menuList'>
        <NavLink style={({ isActive }) => isActive ? { color: "LightSeaGreen" } : { color: "lightgrey" }}
         to={"/landing"}  onClick={()=>setMenu(false)}> <i className="bi bi-signpost"></i> Inicio</NavLink>
        <NavLink style={({ isActive }) => isActive ? { color: "LightSeaGreen" } : { color: "lightgrey" }}
         to={"/xiomara"}  onClick={()=>setMenu(false)}> <i className="bi bi-signpost"></i> Sobre mí</NavLink>
        <NavLink style={({ isActive }) => isActive ? { color: "LightSeaGreen" } : { color: "lightgrey" }}
        to={"/proyectos"} onClick={()=>setMenu(false)}><i className="bi bi-signpost"></i> Proyectos</NavLink>
        <NavLink style={({ isActive }) => isActive ? { color: "LightSeaGreen" } : { color: "lightgrey" }}
         to={"/contacto"} onClick={()=>setMenu(false)}> <i className="bi bi-signpost"></i>  Contactos</NavLink>
        </div>
    </div>
  )
}
