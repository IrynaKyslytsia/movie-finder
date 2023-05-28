const MovieInfo = ({ genres, title, overview, popularity, poster_path, release_date }) => {

    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title} />
            <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
            <p>User Score: {popularity.toFixed(0)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
                {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </>
    )
};

export default MovieInfo;