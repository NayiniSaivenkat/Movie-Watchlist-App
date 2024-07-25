import React, { useState } from 'react';
import { useMovie } from '../context/MovieContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const { searchMovies } = useMovie();

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovies(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex mb-6">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for movies" 
                className="flex-grow p-2 border rounded-l"
            />
            <button 
                type="submit" 
                className="p-2 bg-red-600 text-white rounded-r"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
