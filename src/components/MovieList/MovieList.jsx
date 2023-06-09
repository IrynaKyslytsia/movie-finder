import { useLocation } from "react-router-dom";
import { List, ListItem, MovieLink, Poster, Title } from "./MovieList.styled";
import DefaultImage from '../../images/movieImg.jpg';

const MovieList = ({ movies }) => {    
    const location = useLocation();

    return (        
      <List>
            {movies && movies.map(({ id, title, poster_path }) => (
                <ListItem key={id}>
                    <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                        <Poster
                        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : DefaultImage}
                        alt={title} /> 
                        <Title>{title}</Title>
                    </MovieLink>
                </ListItem>
        ))}
      </List>
  );
};

export default MovieList;