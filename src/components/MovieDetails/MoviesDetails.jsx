import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import * as api from '../../api';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieId = window.location.pathname.split('/').pop();
        const details = await api.getMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        navigate('/error');
      }
    };

    fetchMovieDetails();
  }, [navigate]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MoviesDetails;
