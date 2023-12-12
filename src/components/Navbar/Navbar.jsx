
import './Navbar.css'; // Asegúrate de tener este archivo para los estilos
import logoBoleto from './logoBoleto.png'; // Ruta correcta al logo.
import { NavLink } from 'react-router-dom'; // Asegúrate de importar NavLink correctamente.
import { useAuthContext } from '../hook/useAuthContext';

const Navbar = () => {
  const { isAuth, logout } = useAuthContext(); 

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logoBoleto} alt="Logo" />
        </div>
        <div className='pages'>
        <div className='inicio'>
                  <NavLink to="/">Inicio</NavLink>
                </div>
          {isAuth
            ? (
              <>
                
                <div className='dashboard'>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </div>
                <div className='logout'>
                  <NavLink to= '/' onClick={logout}>logout</NavLink>
                </div>
              </>
            ) : (
              <>
                <div className='login'>
                  <NavLink to="/login">Login</NavLink>
                </div>
                <div className='register'>
                  <NavLink to="/register">Signup</NavLink>
                </div>
              </>
            )
          }
          <div className="cartelera">
            <NavLink to="/cartelera">Cartelera</NavLink>
          </div>
          <div className="mis-favoritos">
            <NavLink to="/mis-favoritos">Mis favoritas</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
