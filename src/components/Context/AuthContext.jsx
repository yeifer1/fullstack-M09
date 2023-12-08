/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';



const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) 
  const [userPayload, setUserPayload] = useState(null) 

  const login = (token) => {
    localStorage.setItem('token', token) 
    const decodedPayload = jwtDecode(token)
    setUserPayload(decodedPayload)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('token') 
    setUserPayload(null) 
    setIsAuth(false) 
  }

 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedPayload = jwtDecode(token)
      setUserPayload(decodedPayload)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }