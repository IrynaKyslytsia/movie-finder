import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>Movie Details: {movieId}</h1>
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