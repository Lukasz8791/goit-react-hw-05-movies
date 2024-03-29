// Router.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../Router/Router.css';

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MoviesDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
