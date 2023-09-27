import { MovieCard, Poster, Info, Title, Text, Subtitle, PosterWrap } from "./MovieInfo.styled";
import DefaultImage from '../../images/movieImg.jpg';

const MovieInfo = ({ movie }) => {
    const { genres, title, overview, vote_average, poster_path, release_date } = movie;
    console.log(movie)

    return (
        <MovieCard>
            <PosterWrap>
                <Poster
                    src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : DefaultImage}
                    alt={title} />
            </PosterWrap>
            <Info>
                <Title>{`${title} (${release_date.slice(0, 4)})`}</Title>
                <Text>
                    {genres.map(({ name }) => name).join(", ")}
                </Text>
                <Text><b>User Score: {(vote_average * 10).toFixed(0)} %</b></Text>
                <Subtitle>Overview</Subtitle>
                <Text>{overview}</Text>
            </Info>
        </MovieCard>
    )
};

export default MovieInfo;