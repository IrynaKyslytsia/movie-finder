import { useLocation } from "react-router-dom";
import { List, ListItem, MovieLink, Title } from "./MovieList.styled";

const MovieList = ({ movies }) => {    
    const location = useLocation();

    return (        
      <List>
            {movies && movies.map(({ id, title, poster_path }) => (
                <ListItem key={id}>
                    <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                        <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        width='80'/> 
                        <Title>{title}</Title>
                    </MovieLink>
                </ListItem>
        ))}
      </List>
  );
};

export default MovieList;