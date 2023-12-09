/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from 'react';

// Crear el contexto MoviesContext
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // Definir la función para agregar películas
  const addMovieToCatalog = async (formData) => {
    try {
      // Realizar una solicitud POST a tu API para agregar la película a la base de datos
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // La película se agregó con éxito
        const newMovie = await response.json();
        setMovies([...movies, newMovie]);
      } else {
        // Manejo de errores en caso de que la solicitud no sea exitosa
        console.error('Error al agregar la película');
        throw new Error('Error al agregar la película');
      }
    } catch (error) {
      console.error('Error de red:', error);
      throw error;
    }
  };

  const value = {
    movies,
    addMovieToCatalog, // Asegúrate de incluir la función en el contexto
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};
