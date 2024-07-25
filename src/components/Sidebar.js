import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({watchListData}) => {
    const [isFormVisible,setIsFormVisible]=useState(false);
    const handleLogout=()=>{
        navigate('/login');
    }
    const userName=localStorage.getItem("loginUserName");
    const navigate = useNavigate();
    const goToWatchlist = () => {
        navigate('/watch-list', { state: { watchListData } });
    };
    return (
        <div className="w-64 bg-white p-4 shadow-lg fixed top-0 bottom-0 left-0 z-10">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Watchlists</h2>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full p-2 border rounded"
                />
            </div>
            <nav>
                <ul>
                    <li className="mb-2">
                    <button
                    
                    className="flex items-center p-2 rounded text-red-600 bg-gray-200"
    activeClassName="bg-red-600 text-white"
                >
                    Home
                </button>
                    </li>
                    <li className="mb-2">
                    {/* <NavLink
    to={{ pathname: "/watch-list", state: { watchListData } }}
    className="flex items-center p-2 rounded text-red-600 bg-gray-200"
    activeClassName="bg-red-600 text-white"
>
    <span className="ml-2">My Lists</span>
</NavLink> */}
<button
                    onClick={goToWatchlist}
                    className="flex items-center p-2 rounded text-red-600 bg-gray-200"
    activeClassName="bg-red-600 text-white"
                >
                    My List
                </button>
                    </li>
                </ul>
            </nav>
            <div className="absolute bottom-0 left-0 p-4 w-full p-2 border rounded flex justify-between">
                <span className="text-gray-600">{userName}</span>
                <span className="font-bold cursor-pointer"
                onClick={() => setIsFormVisible(!isFormVisible)}
                >...</span>
            </div>
            {isFormVisible && (
        <div className="absolute bottom-12 left-0 p-4 w-full bg-white border rounded shadow-md">
          <button
            className="bg-red-500 text-white p-2 rounded w-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
        </div>
        
    );
};

export default Sidebar;

