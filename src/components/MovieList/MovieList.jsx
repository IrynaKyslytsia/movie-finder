import MovieCard from "components/MovieCard/MovieCard";
import { List } from "./MovieList.styled";

const MovieList = ({ movies }) => {    
    
    return (        
      <List>
          {movies && movies.map((movie) => (
              <MovieCard
                  key={movie.id}
                  movie={movie} />  
        ))}
      </List>
  );
};

export default MovieList;