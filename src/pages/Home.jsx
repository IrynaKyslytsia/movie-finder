import MovieList from "components/MovieList/MovieList";

const Home = ({trendingMovies}) => {
  return <MovieList movies={trendingMovies} />
};

export default Home;