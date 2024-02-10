const apiKey = 'beda84c819c00c5674b5621b8ea274af';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${baseUrl}/trending/movie/day?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};

export const searchMovies = async query => {
  const response = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};
