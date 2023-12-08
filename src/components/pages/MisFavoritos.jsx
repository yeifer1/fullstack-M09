import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import './MisFavoritos.css'; 
import Navbar from "../Navbar/Navbar";

const MisFavoritos = () => {
    const { favoritos, deletMovie, baseURL } = useContext(MoviesContext); // Usa deletMovie desde el contexto
    
    return (
        <>
            <Navbar/>
            <div className="favoritos-container">
                {favoritos.length > 0 ? (
                    favoritos.map((movie) => (
                        <div key={movie._id} className="favorito-item">
                            <img 
                                className="card-poster" 
                                src={`${baseURL}${movie.poster_path}`} 
                                alt={`Póster de ${movie.title}`} 
                            />
                            <div className="card-content">
                                <button className="fav-button" onClick={() => deletMovie(movie._id)}>
                                    Quitar de Favoritos
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay películas en favoritos.</p>
                )}
            </div>
        </>
    );
};

export default MisFavoritos;
