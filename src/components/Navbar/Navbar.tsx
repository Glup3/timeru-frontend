import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PlayPause from '../PlayPause/PlayPause';
import { removeToken } from '../../auth';
import TitleInputField from '../TitleInputField/TitleInputField';

const Navbar = () => {
  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/login" onClick={() => removeToken()}>
              <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
            </Link>
            <TitleInputField />
            <p className="mx-5">14:27</p>
            <PlayPause />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
