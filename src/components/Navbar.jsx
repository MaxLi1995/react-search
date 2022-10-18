import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-grat-700 border-gray-200">
        <div className="flex justify-between item-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl bg-green-500 font-bold text-white py-1 px-2 rounded-lg dark:bg-grey-500 dark:text-gray-900">
                    Search 🔍
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-white dark:text-gray-900 bg-black rounded-lg text-white boarder px-2 py-1">
                {darkTheme ? 'Light' : 'Dark'}
            </button>
        </div>
        <Search />
    </div>
  );
}
