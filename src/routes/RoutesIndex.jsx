import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../components/hook/useAuthContext'
import Home from '../pages/home/Home'
import Cartelera from '../pages/Cartelera'
import MovieDetailsPage from '../pages/MovieDetailsPage'
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm'
import Secret from '../pages/Secret'
import Dashboard from '../pages/Dashboard'

import AddMovieForm from '../pages/AddMovieForm'

const RouteIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route
        path='/'
        element={
        isAuth
          ? <Home />
          : <Navigate to='/login' replace />
      }
      />

      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/mis-favoritos' element={<AddMovieForm />} />
      <Route path='/cartelera' element={<Cartelera />} />
      <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
    </Routes>
  )
}

export default RouteIndex
