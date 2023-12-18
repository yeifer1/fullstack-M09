import { useContext, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import './MoviesDetails.css'
import { useNavigate } from 'react-router-dom'

const MoviesDetails = () => {
  const { movies, incrementLikes, deleteMovie, baseURL } = useContext(MoviesContext)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredMovies = searchTerm.length === 0
    ? movies
    : Array.isArray(movies) // Verifica si 'movies' es un array
      ? movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : [] // Devuelve un array vacío si 'movies' no es un array

  const handleLikeClick = (movieId, event) => {
    event.stopPropagation() // Prevent event bubbling
    incrementLikes(movieId)
  }

  const handleDeleteClick = (movieId, event) => {
    event.stopPropagation() // Prevent event bubbling
    deleteMovie(movieId)
  }

  const goToMovieDetails = (movieId, event) => {
    event.stopPropagation() // Prevent event bubbling
    navigate(`/movie/${movieId}`)
  }

  return (
    <div>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Buscar películas por título...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className='movies-container'>
        {filteredMovies.map((movie) => (
          <div key={movie._id} className='movie-card'>
            <img
              className='card-poster'
              src={`${baseURL}${movie.poster_path}`}
              alt={`Póster de ${movie.title}`}
              onClick={(event) => goToMovieDetails(movie._id, event)}
            />
            <div className='card-content' onClick={(event) => goToMovieDetails(movie._id, event)}>
              <h3 className='movie-title'>{movie.title}</h3>
              <div className='card-actions'>
                <button className='like-button' onClick={(event) => handleLikeClick(movie._id, event)}>
                  <span className='like-icon'>👍</span>
                  <span className='likes-count'>{movie.likes}</span>
                </button>
                <button className='delete-button' onClick={(event) => handleDeleteClick(movie._id, event)}>
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesDetails
