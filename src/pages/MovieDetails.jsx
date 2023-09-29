import { Suspense, useRef, useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from "react-icons/fa";
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { AdditionalInfo, StyledLink } from 'components/MovieInfo/MovieInfo.styled';
import { getMovieInfo } from 'services/api';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <Helmet>
          <title>Movie Details</title>
      </Helmet>
      <StyledLink to={backLinkLocationRef.current}><FaArrowLeft width="24" height="24" style={{marginRight: "6px"}} />GO BACK</StyledLink>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <AdditionalInfo>
        <li>
          <StyledLink to="cast">CAST</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">REVIEWS</StyledLink>
        </li>
      </AdditionalInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;