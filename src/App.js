import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WatchlistPage from './pages/WatchlistPage';
import './styles.css';

const App = () => (
    <AuthProvider>
        <MovieProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/watch-list" element={<WatchlistPage/>} />
                </Routes>
            </Router>
        </MovieProvider>
    </AuthProvider>
);

export default App;




