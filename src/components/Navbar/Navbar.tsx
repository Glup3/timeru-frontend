import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PlayPause from '../PlayPause/PlayPause';
import { removeToken } from '../../auth';

const Navbar = () => {
  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/login" onClick={() => removeToken()}>
              <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
            </Link>
            <input className="flex-1 ml-4 p-2 outline-none border-gray-300 border-2 rounded" placeholder="Title" />
            <p className="mx-5">14:27</p>
            <PlayPause />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
