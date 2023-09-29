import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import { getTrendingMovies } from "services/api";

const Home = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

      getTrendingMovies(page)
        .then(data => { setTrendingMovies(prevState => ([...prevState, ...data.results])) })
        .catch(error => setError(error))
        .finally(() => {setIsLoading(false)})
    }, [page])
  
  const onLoadMore = () => {
        setPage(page + 1)
    };
  
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
      {(trendingMovies && !isLoading) && <button onClick={onLoadMore}>Load more</button>}
    </>
  ) 
};

export default Home;