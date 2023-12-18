// Cartelera.jsx
import  { useContext } from 'react';
import { MoviesContext } from '../../Context/MoviesContext';
import './Cartelera.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import Navbar from "../Navbar/Navbar"
const Cartelera = () => {
    const { movies, baseURL } = useContext(MoviesContext);
    const navigate = useNavigate(); // Hook para la navegación

    const goToMovieDetails = (movieId) => {
        navigate(`/movie/${movieId}`); // Navega a la página de detalles de la película con el ID
    };

    return (
        <>
        <Navbar/>
        <div className="movies-container">
            {movies.map((movie) => (
                <div key={movie._id} className="movie-card">
                    <div className="movie-image-container">
                        <div className="movie-etiqueta">CARTELERA</div>
                        <img 
                            className="card-poster" 
                            src={`${baseURL}${movie.poster_path}`} 
                            alt={`Póster de ${movie.title}`} 
                        />
                        <div className="movie-overlay">
                            <button className="details-button" onClick={() => goToMovieDetails(movie._id)}>
                                Ver detalles
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Cartelera;
