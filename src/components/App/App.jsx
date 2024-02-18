import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          <Route path="/movies/:movieId/cast" exact component={Cast} />
          <Route path="/movies/:movieId/reviews" exact component={Reviews} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
