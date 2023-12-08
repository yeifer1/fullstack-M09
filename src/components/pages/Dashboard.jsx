import { useState, useEffect } from 'react';
import { useAuthContext } from '../hook/useAuthContext';
import { getMeUserService } from '../services/userServices.js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer.jsx';
import './Dashboard.css'; 

const Dashboard = () => {
  const { userPayload } = useAuthContext();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(userPayload.id);
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Ocurrió un error en Dashboard', error.message);
      }
    };
    fetchUserData();
  }, [userPayload.id]);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Bienvenid@, {userData.first_name} {userData.last_name}</h1>
        <div className="dashboard-info">
          {userData?.first_name && <h2>Nombre: {userData.first_name}</h2>}
          {userData?.last_name && <h2>Apellido: {userData.last_name}</h2>}
          {userData?.gender && <h2>Género: {userData.gender}</h2>}
          {userData?.email && <h2>Email: {userData.email}</h2>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
