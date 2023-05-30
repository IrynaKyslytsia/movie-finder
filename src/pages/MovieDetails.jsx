import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useRef, useState, useEffect } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  // console.log(location.state)
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log(backLinkLocationRef.current)

  useEffect(() => {
    setIsLoading(true);

    getMovieInfo(movieId)
      .then(data => {
        setMovieInfo(data)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  }, [movieId])

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;