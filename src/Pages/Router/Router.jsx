import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import Story from '../Story/Story';
import SearchPage from '../../Components/SearchPage/Search';
import RegisterPage from '../../Components/AuthPage/RegisterPage';
import LoginPage from '../../Components/AuthPage/LoginPage';

const Router = () => {
    const location = useLocation();

    // List of paths where Sidebar should be hidden
    const hideSidebarPaths = ['/register', '/login'];

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Conditionally render Sidebar */}
            {!hideSidebarPaths.includes(location.pathname) && (
                <div className="w-[250px] h-full border-r border-slate-200 flex-shrink-0">
                    <Sidebar />
                </div>
            )}

            {/* Main Content */}
            <div className={`flex-grow h-full overflow-auto ${hideSidebarPaths.includes(location.pathname) ? 'w-full' : ''}`}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/username" element={<ProfilePage />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Router;
