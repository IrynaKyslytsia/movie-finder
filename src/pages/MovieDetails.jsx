import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovieInfo(movieId)
      .then(data => {
        console.log(data)
        setMovieInfo(data)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  }, [movieId])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <ul>
        <li>
          <Link to="cast">Актерский состав</Link>
        </li>
        <li>
          <Link to="reviews">Обзор</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;