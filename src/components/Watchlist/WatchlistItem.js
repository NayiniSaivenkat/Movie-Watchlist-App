import React from 'react';

const WatchlistItem = ({ movie, removeMovie }) => {
    return (
        <div className="bg-white rounded shadow-lg w-30 overflow-hidden">
            <img src={movie.Poster} alt={movie.Title} className="w-100 h-64 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{movie.Title}</h2>
                <p className="text-gray-600">{movie.Year}</p>
                <p className="text-yellow-500 font-bold">{movie.imdbRating}/100</p>
                <button 
                    onClick={() => removeMovie(movie.imdbID)} // Call the removeMovie function
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                   Remove
                </button>
            </div>
        </div>
    );
};

export default WatchlistItem;

