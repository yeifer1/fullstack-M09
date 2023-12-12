/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error al cargar películas:', error));
    }, []);

    const incrementLikes = async (movieId) => {
        const response = await fetch(`/api/movies/${movieId}/like`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const updatedMovie = await response.json();
            setMovies(movies.map(movie => movie._id === movieId ? updatedMovie : movie));
        } else {
            console.error('No se pudo incrementar el like de la película');
        }
    };

    const deleteMovie = async (movieId) => {
        const response = await fetch(`/api/movies/${movieId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setMovies(movies.filter(movie => movie._id !== movieId));
        } else {
            console.error('No se pudo eliminar la película');
        }
    };

    const value = {
        movies,
        incrementLikes,
        deleteMovie,
        baseURL
    };

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    );
};
