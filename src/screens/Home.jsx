import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img
              src="https://picsum.photos/id/1005/600/600"
              className="w-xs h-80 rounded-none xs:rounded-xl shadow-2xl"
            />
            <div>
              <h1 className="mb-5 text-4xl font-bold">
                Welcome to Intelligent Luxury
              </h1>
              <p className="mb-5">subtitles</p>
              <button className="btn btn-primary">Get Started button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
