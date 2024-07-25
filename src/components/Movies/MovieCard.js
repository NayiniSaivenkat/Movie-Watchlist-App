import React from 'react';
import {useState} from 'react';

const MovieCard = ({ movie, onAdd }) => {
    // const [watchListData, setWatchListData] = useState([]);
    // const [formData, setFormData] = useState(null);

    const handleAddToWatchlist = () => {
        // Store movie details in formData
        // setFormData(movie);

        // // Add formData to watchListData
        // if (formData) {
        //     setWatchListData(prevWatchList => [...prevWatchList, formData]);
        // }
        onAdd(movie);
    }

    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{movie.Title}</h2>
                <p className="text-gray-600">{movie.Year}</p>
                <p className="text-yellow-500 font-bold">{movie.imdbRating}/100</p>
                <button 
                    onClick={handleAddToWatchlist}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add to Watchlist
                </button>
            </div>
        </div>
    );
};

export default MovieCard;


