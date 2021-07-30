import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div
        className="hero h-screen"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/1005/1600/1400")',
          filter: 'brightness(90%)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">eyX</h1>
            <p className="mb-5 text-xl">
              Eagerness and pleasure. Someone might take to avoid as a welcome
              exercise. At eyX that is either rejected or deleted.
              <br />
              <br />
              <span className="text-3xl">we serve only intelligent.</span>
            </p>
            <Link to="/products">
              <button className="btn btn-primary border-2 border-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
