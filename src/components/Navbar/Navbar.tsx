import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <span>DropDownMenu</span>
            <input className="flex-1 mx-4 p-2 outline-none border-gray-200" placeholder="Title" />
            <span>Start</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
