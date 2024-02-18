import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import styles from './MoviesDetails.module.css';
import * as api from '../../api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await api.getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div className={styles.movieDetails}>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>Additional information</p>

      <ul className={styles.buttonsList}>
        <li onClick={handleCastClick}>
          <Link to={`/movies/${movieId}/cast`}>Open Cast</Link>
        </li>
        <li onClick={handleReviewsClick}>
          <Link to={`/movies/${movieId}/reviews`}>Open Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
