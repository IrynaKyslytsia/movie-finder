import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { getMovies } from "services/api";
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from "components/MovieList/MovieList";
import { Helmet } from "react-helmet";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    };

    setIsLoading(true);

    getMovies(query)
      .then(data => {
        if (data.results.length === 0) {
           Notiflix.Notify.failure('There are no movies...');
        }
        
        setMovies(data.results)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  }, [query]);

  const handleFormSubmit = (searchQuery) => {
    setSearchParams({query: searchQuery})
  };

  return (
    <>
      <Helmet>
          <title>Movies</title>
      </Helmet>
      <SearchForm
        onSubmit={handleFormSubmit} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;