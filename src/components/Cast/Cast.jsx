import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: 'beda84c819c00c5674b5621b8ea274af',
            },
          }
        );

        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h3>Cast</h3>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.actor}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
