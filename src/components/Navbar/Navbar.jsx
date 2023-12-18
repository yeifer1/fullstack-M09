/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css' // Asegúrate de tener este archivo para los estilos
// Importa la imagen correctamente. Asegúrate de que la ruta sea correcta.
import logoBoleto from './logoBoleto.png' // Asegúrate de que la ruta sea correcta.
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hook/useAuthContext'
const Navbar = () => {
  const { isAuth, logout } = useAuthContext()

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          {/* Usa la imagen importada aquí */}
          <img src={logoBoleto} alt='Logo' />
        </div>
        <div className='pages'>

          <div className='inicio'>
            <NavLink to='/'>Inicio</NavLink>
          </div>
          {isAuth

            ? (
              <>

                <div className='logout'>
                  <NavLink to='/' onClick={logout}>logout</NavLink>
                </div>

                <div className='dashboard'>
                  <NavLink to='/dashboard'>Dashboard</NavLink>
                </div>

                <div className='cartelera'>
                  <NavLink to='/cartelera'>Cartelera</NavLink>
                </div>

                <div className='Crear'>
                  <NavLink to='/crear'>crear</NavLink>
                </div>
              </>
              )

            : (

              <>
                <div className='login'>
                  <NavLink to='/login'>Login</NavLink>
                </div>

                <div className='register'>
                  <NavLink to='/register'>Signup</NavLink>
                </div>
              </>
              )}

        </div>
      </nav>
    </>
  )
}

export default Navbar
