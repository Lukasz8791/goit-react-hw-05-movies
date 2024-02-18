import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const apiKey = 'beda84c819c00c5674b5621b8ea274af';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch cast');
        }
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <h2 className={styles.castTitle}>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
