import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-[#EF060F] to-[#b60cf2] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="text-[#081A42] text-4xl font-bold tracking-tight">
          Storyverse
        </Link>
      </div>
      <div className="space-x-4">
        {/* Navigation Links */}
        <Link to="/" className="text-[#081A42] p-6 font-semibold">
          Home
        </Link>
        <Link to="/browse" className="text-[#081A42] p-10 font-semibold">
          Browse
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
