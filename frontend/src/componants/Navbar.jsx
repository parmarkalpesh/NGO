import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-[#004B8D] h-16 flex items-center px-4 sm:px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo.png"
            alt="NGOConnect Logo"
            className="sm:h-14 sm:w-14 object-cover rounded-full border-2 border-white/80 bg-white shadow-sm"
            aria-label="NGOConnect Home"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/56?text=Logo';
            }}
          />
        </Link>
        <div className='text-2xl text-white px-4 font-bold'>NGOConnect

        </div>
      </div>

      {/* Navigation Links */}
      <nav className="ml-auto">
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200 text-sm sm:text-base"
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200 text-sm sm:text-base"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200 text-sm sm:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;