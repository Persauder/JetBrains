import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../assets/ai-banner-back-md.png';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-700 text-white p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-600 w-6 h-6 rounded-sm"></div>
                    <span className="text-xl font-bold text-gray-300 hover:text-white transition">JETBRAINS</span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-6 text-sm">
                    <a href="#ai" className="hover:text-gray-400">AI</a>
                    <a href="#developer-tools" className="hover:text-gray-400">Developer Tools</a>
                    <a href="#team-tools" className="hover:text-gray-400">Team Tools</a>
                    <a href="#education" className="hover:text-gray-400">Education</a>
                    <a href="#solutions" className="hover:text-gray-400">Solutions</a>
                    <a href="#support" className="hover:text-gray-400">Support</a>
                    <a href="#store" className="hover:text-gray-400">Store</a>
                </nav>

                {/* Icons on the Right */}
                <div className="flex space-x-4">
                    {/* Search Icon */}
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5a6 6 0 11-12 0 6 6 0 0112 0zM6 6h0zM16.293 16.293a9 9 0 111.414-1.414l5.293 5.293a1 1 0 01-1.414 1.414l-5.293-5.293z" />
                        </svg>
                    </div>

                    {/* User Account Icon */}
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a3 3 0 10-3 3 3 3 0 003-3zM12 4a6 6 0 10-6 6 6 6 0 006-6zM5.3 18.3a7.5 7.5 0 0113.4 0" />
                        </svg>
                    </div>

                    {/* Cart Icon */}
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l3 9h10l3-9h2M9 7h6M4 7h1l1 4h10l1-4h1M3 7h18M5 14h14M3 3h2l3 9h10l3-9h2" />
                        </svg>
                    </div>

                    {/* Language Selector */}
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18c-2.167 0-4-1.333-4-3s1.833-3 4-3 4 1.333 4 3-1.833 3-4 3zM12 6c-4 0-7-2.25-7-5s3-5 7-5 7 2.25 7 5-3 5-7 5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;