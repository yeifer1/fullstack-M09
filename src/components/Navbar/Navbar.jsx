/* eslint-disable no-unused-vars */
import React from 'react';
import './Navbar.css'; // Asegúrate de tener este archivo para los estilos
// Importa la imagen correctamente. Asegúrate de que la ruta sea correcta.
import logoBoleto from './logoBoleto.png'; // Asegúrate de que la ruta sea correcta.
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        {/* Usa la imagen importada aquí */}
        <img src={logoBoleto} alt="Logo" />
      </div>
      <div  className='pages'>

           <div className='inicio'>
           <Link to="/">Inicio</Link>
               </div>

              
           <div className='logaot'>
           <Link to="/">logaot</Link>
               </div>
           
                <div className='login'>
                <Link to={"/login"}>Login</Link > 
                  </div>

                  <div className='register'>
               <Link to={"/register"}>Signup</Link>
               </div>  

               
               <div className='register'>
               <Link to={"/dashboard"}>Dashboard</Link>
               </div>  
             
      <div className="cartelera">
      <Link to="/cartelera">Cartelera</Link>
      </div>

      <div className="Mis favoritas">
      <Link to="/mis-favoritos">Mis favoritas</Link>
      </div>
        
       
       
    </div>
  </nav>
    </>
  );
};

export default Navbar;
