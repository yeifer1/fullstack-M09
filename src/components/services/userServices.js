import axios from 'axios'

const BASE_URL = 'https://tame-yoke-moth.cyclic.app'

// Referencia: https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js
// Si existe un token, inyectalo en la cabecera de la petición

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token); // Agrega esta línea

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const registerUserService = (data) => axios.post(`${BASE_URL}/api/users/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/api/users/login`, data)
const getSingleUserService = (id) => axios.get(`${BASE_URL}/api/users/${id}`)
const getMeUserService = () => axios.get(`${BASE_URL}/api/me`)

export {
  registerUserService,
  loginUserService,
  getSingleUserService,
  getMeUserService
}