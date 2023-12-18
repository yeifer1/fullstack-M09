/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const baseURL = 'https://image.tmdb.org/t/p/original'

  const fetchMovies = async () => {
    setIsLoading(true)
    // Obtiene el token del almacenamiento local
    const token = localStorage.getItem('token')
    try {
      const response = await fetch('https://magenta-dragonfly-coat.cyclic.app/api/movies', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Incluye el token en el encabezado de autorización
        }
      })
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos de la API')
      }
      const data = await response.json()
      setMovies(data) // Asumiendo que la respuesta es un array de películas
    } catch (error) {
      console.error('Fetch Error:', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const incrementLikes = async (movieId) => {
    const token = localStorage.getItem('token') // Obtiene el token del almacenamiento local
    try {
      const response = await fetch(`https://magenta-dragonfly-coat.cyclic.app/api/movies/${movieId}/like`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Incluye el token en el encabezado de autorización
        }
      })

      if (!response.ok) {
        throw new Error('No se pudo incrementar el like de la película')
      }

      const updatedMovie = await response.json()
      setMovies(movies.map(movie => movie._id === movieId ? updatedMovie : movie))
    } catch (error) {
      console.error(error)
    }
  }

  const deleteMovie = async (movieId) => {
    const token = localStorage.getItem('token') // Obtiene el token del almacenamiento local
    try {
      const response = await fetch(`https://magenta-dragonfly-coat.cyclic.app/api/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Incluye el token en el encabezado de autorización
        }
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar la película')
      }

      // Actualiza el estado de las películas después de eliminar una
      setMovies(movies.filter(movie => movie._id !== movieId))
    } catch (error) {
      console.error(error)
    }
  }

  const value = {
    movies,
    incrementLikes,
    deleteMovie,
    baseURL,
    isLoading
  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
