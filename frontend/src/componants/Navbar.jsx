// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-[#004B8D] h-16 flex items-center px-6 shadow-md">
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        NGOConnect
      </div>

      {/* Navigation Links */}
      <nav className="ml-auto">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200"
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-white hover:text-[#FFDE73] transition-colors duration-200"
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
