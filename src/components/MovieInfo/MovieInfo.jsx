import { MovieCard, Poster, Info, Title, Text, Subtitle, PosterWrap } from "./MovieInfo.styled";
import DefaultImage from '../../images/movieImg.jpg';

const MovieInfo = ({ movie }) => {
    const { genres, title, overview, runtime, vote_average, poster_path, release_date } = movie;
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
                <Text style={{color: "#FFFFFF80"}}>
                    {genres.map(({ name }) => name).join(", ")}
                </Text>
                <Text>{runtime} m</Text>
                <Text>User Score: <b style={{color: "#a30101", fontSize: "26px"}}>{(vote_average * 10).toFixed(0)} %</b></Text>
                <div>
                    <Subtitle>Overview</Subtitle>
                    <Text>{overview}</Text>
                </div>
            </Info>
        </MovieCard>
    )
};

export default MovieInfo;