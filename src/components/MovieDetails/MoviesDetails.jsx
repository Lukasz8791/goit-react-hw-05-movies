import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom'; // Dodaj Outlet tutaj
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import * as api from '../../api';
import styles from './MoviesDetails.module.css';

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
    <div className={styles.movieDetails}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className={styles.movieImage}
      />
      <p className={styles.movieOverview}>{movie.overview}</p>
      <nav className={styles.navLinks}>
        <Link to="cast" className={styles.navLink}>
          Cast
        </Link>
        <Link to="reviews" className={styles.navLink}>
          Reviews
        </Link>
      </nav>

      <Routes>
        <Route
          path="cast"
          element={
            <Outlet>
              <Cast />
            </Outlet>
          }
        />
        <Route
          path="reviews"
          element={
            <Outlet>
              <Reviews />
            </Outlet>
          }
        />
      </Routes>
    </div>
  );
};

export default MoviesDetails;
