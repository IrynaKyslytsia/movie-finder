import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(data => {
      setMovieReviews(data.results)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  
  }, [movieId])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {movieReviews && movieReviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;