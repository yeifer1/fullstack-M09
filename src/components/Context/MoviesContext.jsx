/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const baseURL = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch('/api/movies')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar películas')
        }
        return res.json()
      })
      .then(data => {
        setMovies(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error al cargar películas:', error)
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const incrementLikes = async (movieId) => {
    try {
      const response = await fetch(`/api/movies/${movieId}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
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
    try {
      const response = await fetch(`/api/movies/${movieId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar la película')
      }

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
    isLoading,
    error
  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
