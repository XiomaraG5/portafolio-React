import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from './Menu'

export const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const navigate = useNavigate()
  return (
    <div className='Navbar'>
        <div className='logo' onClick={()=>navigate('landing')}>
            <div className='rectangulo'>
    
            <div className='extremo1'>
                <div className='circle1'></div>
            </div>

            <div className='extremo2'>
                <div className='circle2'></div>
            </div>
            </div>
        </div>
        <div>
            <i className="bi bi-list"
            onClick={()=>setMenu(true)}>
            </i>
        </div>
        {menu && <Menu setMenu={setMenu}/>}
    </div>
  )
}
