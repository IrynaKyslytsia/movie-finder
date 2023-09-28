import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/api';
import { ActorName, ActorPhoto, CastList, Text, Message, PhotoWrap, Info, ActorWrap } from './Cast.styled';
import DefaultImage from '../../images/profileImg.jpg';

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
      {movieCast.length > 0 ? <CastList>
        {movieCast.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <ActorWrap>
              <PhotoWrap>
                <ActorPhoto
                  src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : DefaultImage}
                  alt={name}
                  width='160' />
              </PhotoWrap>
              <Info>
                <ActorName>{name}</ActorName>
                <Text>{character}</Text>
              </Info>
            </ActorWrap>
          </li>
      ))}
      </CastList> : (<Message>Sorry, there is no information here...</Message>)}
    </>
  );
};

export default Cast;