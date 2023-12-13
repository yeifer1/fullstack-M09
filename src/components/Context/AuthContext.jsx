/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const decodeToken = (token) => {
    if (token && token.split('.').length === 3) {
      try {
        const decoded = jwtDecode(token);
        console.log("Token decodificado:", decoded);
        setUserPayload(decoded);
        setIsAuth(true);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        logout();
      }
    } else {
      console.error("Token inválido o faltante");
      logout();
    }
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    console.log("Token guardado en localStorage:", token);
    decodeToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    console.log("Usuario deslogueado, token removido de localStorage");
    setUserPayload(null);
    setIsAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token recuperado de localStorage:", token); // Para verificar si hay un token
    if (token) {
      decodeToken(token);
    } else {
      console.log("No se encontró token en localStorage, el usuario no está autenticado");
      setIsAuth(false);
    }
  }, []);

  const values = {
    isAuth,
    userPayload,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
