import axios from 'axios'

const BASE_URL = 'https://magenta-dragonfly-coat.cyclic.app'

// https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

const getSingleItem = (id) => axios.get(`${BASE_URL}/api/movie${id}`)
const getAllItems = () => axios.get(`${BASE_URL}/api/movies`)

export {
  getSingleItem,
  getAllItems
}