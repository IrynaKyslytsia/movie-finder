import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { List, ListItem, MovieLink, Title } from "./MovieList.styled";

const MovieList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

      getTrendingMovies()
        .then(data => { setTrendingMovies(data.results) })
        .catch(error => setError(error))
        .finally(() => {setIsLoading(false)})
  }, [])

    return (
        <>
            {isLoading && <div>Is loading...</div>}
            {error && <div>{error.message}</div>}
      <List>
            {trendingMovies && trendingMovies.map(({ id, title, poster_path }) => (
                <ListItem key={id}>
                    <MovieLink key={id} to={`/movies/${id}`}>
                        <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        width='80'/> 
                        <Title>{title}</Title>
                    </MovieLink>
                </ListItem>
        ))}
      </List>
        </>
  );
};

export default MovieList;