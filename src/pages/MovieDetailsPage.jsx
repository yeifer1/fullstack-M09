import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../Context/MoviesContext'
import Navbar from '../components/Navbar/Navbar'
import '../styles/MovieDetailsPage.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const { movies } = useContext(MoviesContext)
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const movie = movies.find((m) => m._id === movieId)
    setMovieDetails(movie)
  }, [movieId, movies])

  return (
    <>
      <Navbar />
      <div>
        {movieDetails
          ? (
            <div className='info'>
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                className='card-img-top'
                alt={`Póster de ${movieDetails.title}`}
              />
              <h1>{movieDetails.title}</h1>
              <p>Director: {movieDetails.director}</p>
              <p>Año de lanzamiento: {movieDetails.releaseYear}</p>
              <p>Géneros: {movieDetails.genre_ids.join(', ')}</p>
              <p>Idioma original: {movieDetails.original_language}</p>
              <p>Resumen: {movieDetails.overview}</p>
              <p>Puntuación: {movieDetails.vote_average}</p>
              <p>¿Para adultos? {movieDetails.adult ? 'Sí' : 'No'}</p>
              <p>Fecha de lanzamiento: {movieDetails.release_date}</p>
              <p>¿Es video? {movieDetails.video ? 'Sí' : 'No'}</p>
              <p>Número de votos: {movieDetails.vote_count}</p>
              <p>Fecha de creación: {movieDetails.createdAt}</p>
              <p>Fecha de actualización: {movieDetails.updatedAt}</p>
            </div>
            )
          : (
            <p>Loading...</p>
            )}
      </div>
    </>
  )
}

export default MovieDetailsPage
