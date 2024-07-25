import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    // Function to fetch movies from OMDB API
    const fetchMovies = async (query = 'popular') => {
        try {
            const apiKey = process.env.REACT_APP_OMDB_API_KEY;
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
            if (response.data.Response === "True") {
                console.log(response.data)
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching data from OMDB API", error);
        }
    };

    // Fetch initial set of movies when component mounts
    useEffect(() => {
        fetchMovies(); // Fetch popular or default movies initially
    }, []);

    const searchMovies = (query) => {
        fetchMovies(query); // Fetch movies based on search query
    };

    return (
        <MovieContext.Provider value={{ movies, searchMovies }}>
            {children}
        </MovieContext.Provider>
    );
};



