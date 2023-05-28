import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import { getTrendingMovies } from "services/api";

const Home = () => {
  
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
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </>
  ) 
};

export default Home;