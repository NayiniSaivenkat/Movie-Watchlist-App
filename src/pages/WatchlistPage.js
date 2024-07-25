import React from 'react';
import { createRoutesFromChildren, useLocation } from 'react-router-dom';
import Watchlist from '../components/Watchlist/Watchlist'; // Adjust the import as needed
import { useNavigate } from 'react-router-dom';
const WatchlistPage = () => {
   const navigate=useNavigate();
    const location = useLocation();
    const backToHome=()=>{
        navigate("/home")
    }
    // console.log(location)
    return (
        <div>
            <button onClick={backToHome}>Back to home page</button>
        
        <Watchlist location={location} className="flex min-h-screen bg-gray-100" />
        </div>
    );
};

export default WatchlistPage;


