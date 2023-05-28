// import { useState, useEffect } from "react";
// import { getTrendingMovies } from "services/api";
import { List, ListItem, MovieLink, Title } from "./MovieList.styled";

const MovieList = ({movies}) => {

    return (        
      <List>
            {movies && movies.map(({ id, title, poster_path }) => (
                <ListItem key={id}>
                    <MovieLink key={id} to={`/movies/${id}`}>
                        <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        width='80'/> 
                        <Title>{title}</Title>
                    </MovieLink>
                </ListItem>
        ))}
      </List>
  );
};

export default MovieList;