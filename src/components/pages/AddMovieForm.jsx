import { useState } from 'react';
import './AddMovieForm.css';

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseYear: '',
    // Agrega más campos según tus necesidades
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza una solicitud POST a tu API en la nueva URL para agregar la película a la base de datos
      const response = await fetch('https://tame-yoke-moth.cyclic.app/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // La película se agregó con éxito, puedes redirigir al usuario a la página principal u realizar otras acciones
        console.log('Película agregada con éxito');
      } else {
        // Manejo de errores en caso de que la solicitud no sea exitosa
        console.error('Error al agregar la película');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Película</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Año de Estreno:</label>
          <input
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
          />
        </div>
        {/* Agrega más campos según tus necesidades */}
        <div>
          <button type="submit">Agregar Película</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
