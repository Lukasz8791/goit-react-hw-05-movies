const apiKey = 'beda84c819c00c5674b5621b8ea274af';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/trending/movie/day?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending movies. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
    );

    if (!response.ok) {
      throw new Error(`Failed to search movies. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error.message);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movie details. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    throw error;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movie credits. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie credits:', error.message);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movie reviews. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error.message);
    throw error;
  }
};
