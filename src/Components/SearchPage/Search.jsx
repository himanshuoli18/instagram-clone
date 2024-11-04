import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchUserCard from './SearchUserCard';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        // Add search submit functionality here (e.g., API call)
        console.log(`Searching for: ${searchTerm}`);
    };

    return (
        <div className='flex flex-col items-center w-full py-8 bg-transparent'>
            {/* Search Bar with Button */}
            <div className='w-full max-w-lg mb-6 flex'>
                <input
                    className='w-full pl-5 p-3 text-lg border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 transition duration-300'
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button 
                    className='flex items-center px-4 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition duration-300'
                    onClick={handleSearchSubmit}
                >
                    <span className='mr-2 font-semibold'>Search</span><FaSearch />
                </button>
            </div>
            <hr />
            <div className='space-y-5 mt-10 border p-5 w-[40%]'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_,item) => <SearchUserCard key={item} />)}
            </div>
        </div>
    );
};

export default Search;
