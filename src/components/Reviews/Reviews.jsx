import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';
import * as api from '../../api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await api.getMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsTitle}>Reviews</h2>
      <ul className={styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <p className={styles.author}>Author: {review.author}</p>
            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
