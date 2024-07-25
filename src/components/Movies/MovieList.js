import React from 'react';
import { useMovie } from '../../context/MovieContext';
import MovieCard from './MovieCard';

const MovieList = ({onAddToWatchlist}) => {
    const { movies } = useMovie();

    return (
        <div className="grid grid-cols-4 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onAdd={onAddToWatchlist} />
            ))}
        </div>
    );
};

export default MovieList;

