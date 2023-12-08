import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext';
import Home from "../home/Home";
import Cartelera from "../pages/Cartelera";
import MovieDetailsPage from "../pages/MovieDetailsPage"; 
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Secret from '../pages/Secret';
import Dashboard from '../pages/Dashboard';
import MisFavoritos from '../pages/MisFavoritos';



const RouteIndex = () => {
  const { isAuth } = useAuthContext(); 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={
          isAuth
            ? <Dashboard />
            : <Navigate to='/login' replace />
        }
      />
      
      <Route path="/mis-favoritos" element={<MisFavoritos />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
    </Routes>
  );
};

export default RouteIndex;
