import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Reviews } from 'components/Rewievs/Rewievs';
import { Cast } from 'components/Cast/Cast';
import { Layout } from 'components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>      
    </Routes>
  );
};

export default App;



