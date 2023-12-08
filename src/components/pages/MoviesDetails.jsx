import { useContext, useState } from 'react';
import { MoviesContext } from '../Context/MoviesContext';
import './MoviesDetails.css';

const MoviesDetails = () => {
    const { movies, incrementLikes, baseURL, agregarAFavoritos } = useContext(MoviesContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = searchTerm.length === 0 
        ? movies 
        : movies.filter(movie => 
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar películas por título..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="movies-container">
                {filteredMovies.map((movie) => (
                    <div key={movie._id} className="movie-card">
                        <img 
                            className="card-poster" 
                            src={`${baseURL}${movie.poster_path}`} 
                            alt={`Póster de ${movie.title}`} 
                        />
                        <div className="card-content">
                            <h3 className="movie-title">{movie.title} ({movie.releaseYear})</h3>
                            <p className="movie-director">Director: {movie.director}</p>
                            <button className="like-button" onClick={() => incrementLikes(movie._id)}>
                                <span className="like-icon">👍</span>
                                <span className="likes-count">{movie.likes}</span>
                            </button>
                           <button className="like-button" onClick={() => agregarAFavoritos(movie)}>
    ❤️ Agregar a mis favoritos
</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesDetails;
