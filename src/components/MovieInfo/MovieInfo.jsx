import { MovieCard, Poster, Info, Title, Text, Subtitle } from "./MovieInfo.styled";

const MovieInfo = ({ movie }) => {
    const { genres, title, overview, vote_average, poster_path, release_date } = movie;

    return (
        <MovieCard>
            <Poster
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title} />
            <Info>
                <Title>{`${title} (${release_date.slice(0, 4)})`}</Title>
                <Text><b>User Score: {(vote_average * 10).toFixed(0)} %</b></Text>
                <Subtitle>Overview</Subtitle>
                <Text>{overview}</Text>
                <Subtitle>Genres</Subtitle>
                <Text>
                    {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                    ))}
                </Text>
            </Info>
        </MovieCard>
    )
};

export default MovieInfo;