import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import data from './api/movies.json';
// 11-13-20
export const App = () => {
  const [movies, setMovies] = useState(data);

  const addMovieToList = (movie) => {
    setMovies(prevMovies => [...prevMovies, movie]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <FindMovie
          addMovie={addMovieToList}
          movies={movies}
        />
      </div>
    </div>
  );
};
