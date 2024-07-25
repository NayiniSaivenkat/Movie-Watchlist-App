import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/Movies/MovieList';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [watchListData, setWatchListData] = useState([]);

    const addToWatchlist = (movie) => {
        setWatchListData(prevWatchList => [...prevWatchList, movie]);
        console.log(watchListData)
    };
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar watchListData={watchListData} />
            <div className="flex flex-col flex-grow p-6 ml-64 overflow-y-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-red-600">Welcome to Watchlists</h1>
                    <p className="mt-2 text-gray-700">
                        Browse movies, add them to watchlists and share them with friends.
                        Just click the <span className="font-bold">Add to Watchlist</span> to add a movie,
                        the poster to see more details or the checkmark to mark the movie as watched.
                    </p>
                </header>
                <SearchBar />
                <MovieList onAddToWatchlist={addToWatchlist} />
                {/* <Link 
                    to={{ pathname: "/watch-list", state: { watchListData } }}
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Go to Watchlist
                </Link> */}
            </div>
        </div>
    );
};

export default HomePage;




