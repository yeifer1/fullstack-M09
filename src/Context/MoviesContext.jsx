/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { getAllItems } from '../services/moviesServices'

export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const baseURL = 'https://image.tmdb.org/t/p/original'

  const fetchMovie = async () => {
    try {
      const response = await getAllItems()
      if (response.status === 200) {
        setMovies(response.data.results)
        setIsLoading(false)
      }
    } catch (error) {
      console.log('Fetch Error:', error)
    }
  }
  useEffect(() => {
    fetchMovie()
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
    isLoading

  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
