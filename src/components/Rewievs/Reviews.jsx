import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import { AuthorName, Content, ListItem, ReviewList } from './Reviews.styled';
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
      <ReviewList>
        {movieReviews && movieReviews.map(({ id, author, content }) => (
          <ListItem key={id}>
            <AuthorName>Author: {author}</AuthorName>
            <Content>{content}</Content>
          </ListItem>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;