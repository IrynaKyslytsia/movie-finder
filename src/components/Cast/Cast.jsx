import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/api';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieCast(movieId)
      .then(data => {
      setMovieCast(data.cast)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  
  }, [movieId])

  return (
    <>
       {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {movieCast && movieCast.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width='160' />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
      ))}
      </ul>
    </>
  );
};

export default Cast;