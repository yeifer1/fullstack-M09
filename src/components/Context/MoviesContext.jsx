/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error al cargar películas:', error));
    }, []);

    const agregarAFavoritos = (movie) => {
        if (!favoritos.some(favorito => favorito._id === movie._id)) {
            setFavoritos(favoritosActuales => [...favoritosActuales, movie]);
        }
    };

    const deletMovie = (movieId) => {
        const nuevosFavoritos = favoritos.filter(favorito => favorito._id !== movieId);
        setFavoritos(nuevosFavoritos);
    };

    const incrementLikes = (movieId) => {
        const updatedMovies = movies.map(movie => {
            if (movie._id === movieId) {
                return { ...movie, likes: (movie.likes ? movie.likes + 1 : 1) };
            }
            return movie;
        });
        setMovies(updatedMovies);
    };

    const value = {
        movies,
        favoritos,
        agregarAFavoritos,
        deletMovie,
        incrementLikes, 
        baseURL
    };

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    );
};
