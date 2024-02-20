import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import * as api from '../../api';
import styles from './MoviesDetails.module.css';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await api.getMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        navigate('/error');
      }
    };

    fetchMovieDetails();
  }, [movieId, navigate]);

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

      <Outlet />
    </div>
  );
};

export default MoviesDetails;
