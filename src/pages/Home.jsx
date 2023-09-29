import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { getTrendingMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 160px;
    height: 36px;
    background-color: #a30101;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #530202;
    }
`;

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
      <Helmet>
          <title>Movie Finder</title>
      </Helmet>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
      {(trendingMovies && !isLoading) && <Button onClick={onLoadMore}>LOAD MORE</Button>}
    </>
  ) 
};

export default Home;