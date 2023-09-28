import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { getAllMovies, getMovies } from "services/api";
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from "components/MovieList/MovieList";
import { LoadMoreBtn } from "components/MovieList/MovieList.styled";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setIsLoading(true);

    getAllMovies(page)
      .then(data => { setMovies(prevState => ([...prevState, ...data.results])) })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  }, [page]);

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

  const onLoadMore = () => {
        setPage(page + 1)
    };

  return (
    <>
      <SearchForm
        onSubmit={handleFormSubmit} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movies && <MovieList movies={movies} />}
      {(movies.length > 0 && !isLoading) && <LoadMoreBtn onClick={onLoadMore}>LOAD MORE</LoadMoreBtn>}
    </>
  );
};

export default Movies;