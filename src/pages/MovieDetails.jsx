import MovieInfo from 'components/MovieInfo/MovieInfo';
import { AdditionalInfo, BackLink, InfoLink } from 'components/MovieInfo/MovieInfo.styled';
import { Suspense, useRef, useState, useEffect } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
      <BackLink to={backLinkLocationRef.current}>GO BACK</BackLink>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <AdditionalInfo>
        <li>
          <InfoLink to="cast">Cast</InfoLink>
        </li>
        <li>
          <InfoLink to="reviews">Reviews</InfoLink>
        </li>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;