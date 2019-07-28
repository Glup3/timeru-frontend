import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <span>DropDownMenu</span>
            <input className="flex-1 ml-4 p-2 outline-none border-gray-300 border-2 rounded" placeholder="Title" />
            <p className="mx-5">14:27</p>
            <FontAwesomeIcon icon={faPlay} size="lg" className="text-blue-300 hover:text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
