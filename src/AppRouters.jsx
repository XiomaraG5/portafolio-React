import {  Routes, Route, BrowserRouter } from "react-router-dom"
import React from 'react';
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Principal } from "./components/Principal";
import { Proyectos } from "./components/Proyects";
import { Contacto } from "./components/Contacto";
import './styles/index.css'

export const AppRouters =()=>{
 
      return <BrowserRouter>
           <Navbar/>
          <Routes>
              <Route path="/landing" element={<Principal />} />
              <Route path="/xiomara" element={<About/>} /> 
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contacto" element={<Contacto />}/>
              <Route path="/*" element={<Principal />} />
              
          </Routes>
          <Footer />
      </BrowserRouter>;
  
}
