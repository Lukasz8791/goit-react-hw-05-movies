import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: 'beda84c819c00c5674b5621b8ea274af',
            },
          }
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.review}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
