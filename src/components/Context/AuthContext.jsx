/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { decode as jwtDecode } from 'jwt-decode';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const decodeToken = (token) => {
    if (token && token.split('.').length === 3) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    } else {
      console.error("Token inválido o faltante");
    }
    return null;
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedPayload = decodeToken(token);
    if (decodedPayload) {
      setUserPayload(decodedPayload);
      setIsAuth(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserPayload(null);
    setIsAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedPayload = decodeToken(token);
    if (decodedPayload) {
      setUserPayload(decodedPayload);
      setIsAuth(true);
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
