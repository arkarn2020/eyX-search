import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="bg-purple-500 text-gray-50">
        <div className="flex items-center mx-5 sm:mx-20">
          <div className="my-1">
            <label className="text-2xl">
              <Link to="/">eyX</Link>
            </label>
          </div>
          <div className="flex ml-auto text-sm">
            <div className="mx-5">
              <label>
                <Link to="/products">products</Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
