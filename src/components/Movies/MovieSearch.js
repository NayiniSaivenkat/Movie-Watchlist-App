import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const searchMovies = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching data from OMDB API", error);
        }
    };

    return (
        <div>
            <form onSubmit={searchMovies}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for movies" 
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    );
};

export default MovieSearch;

