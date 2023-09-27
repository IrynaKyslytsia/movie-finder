import { useLocation } from "react-router-dom";
import DefaultImage from '../../images/movieImg.jpg';
import { CardWrap, ListItem, MovieLink, Poster, PosterWrap, Info, Title, TitleWrap, Rating } from './MovieCard.styled';

const MovieCard = ({ movie }) => {

    const location = useLocation();
    
    const { id, title, poster_path, release_date, vote_average } = movie;
    // console.log(movie)

    return (
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
                                <Info>{release_date.slice(0, 4)}</Info>
                            </TitleWrap>
                            <Rating>{vote_average.toFixed(1)}</Rating>
                        </CardWrap>
                    </MovieLink>
                </ListItem>
    )
};

export default MovieCard;