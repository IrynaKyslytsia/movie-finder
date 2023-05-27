import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";

const MovieList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {setTrendingMovies(data.results)})
  }, [])

    return (
      <ul>
            {trendingMovies && trendingMovies.map(({ id, title, poster_path }) => (
                <li key={id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        width='160'/> 
                    <h3>{title}</h3>
                </li>
        ))}
      </ul>
  );
};

export default MovieList;