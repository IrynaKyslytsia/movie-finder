import { useLocation } from "react-router-dom";
import { CardWrap, List, ListItem, MovieLink, Poster, PosterWrap, ReleaseDate, Title, TitleWrap } from "./MovieList.styled";
import DefaultImage from '../../images/movieImg.jpg';

const MovieList = ({ movies }) => {    
    const location = useLocation();

    return (        
      <List>
            {movies && movies.map(({ id, title, poster_path, release_date }) => (
                <ListItem key={id}>
                    <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                        <CardWrap>
                            <PosterWrap>
                                <Poster
                                    src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : DefaultImage}
                                    alt={title} /> 
                            </PosterWrap>
                            <TitleWrap>
                                <Title>{title}</Title>
                                <ReleaseDate>{release_date.slice(0, 4)}</ReleaseDate>
                            </TitleWrap>
                        </CardWrap>
                    </MovieLink>
                </ListItem>
        ))}
      </List>
  );
};

export default MovieList;