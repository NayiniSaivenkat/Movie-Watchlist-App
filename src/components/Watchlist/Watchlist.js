import React, { useState } from 'react';
import WatchlistItem from "../Watchlist/WatchlistItem"; // Make sure to import your WatchlistItem component

const Watchlist = ({ location }) => {
    // Extract watchListData from location.state
    const initialWatchListData = location?.state?.watchListData || [];
    const [watchListData, setWatchListData] = useState(initialWatchListData);

    const removeMovie = (imdbID) => {
        const updatedWatchList = watchListData.filter(movie => movie.imdbID !== imdbID);
        setWatchListData(updatedWatchList);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {watchListData.length > 0 ? (
                watchListData.map(movie => (
                    <WatchlistItem 
                        key={movie.imdbID} 
                        movie={movie} 
                        removeMovie={removeMovie} 
                    />
                ))
            ) : (
                <p>No movies in your watchlist.</p>
            )}
        </div>
    );
};

export default Watchlist;


