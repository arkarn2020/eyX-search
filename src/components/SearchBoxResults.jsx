import React from 'react';

const SearchBoxResults = ({ searching, results }) => {
  return (
    <>
      <div className="border-b-2 border-gray-300">
        {!searching ? (
          <div>
            <div className="flex justify-center">
              {!results.length ? (
                <p className="text-lg">ooops...!! no such product in store.</p>
              ) : (
                <div className="text-lg">
                  <span className="px-3 py-2 mr-2 text-white rounded-full bg-purple-400">
                    {results.length}
                  </span>
                  search results
                </div>
              )}
            </div>

            {/* search results display */}
            <div className="flex flex-wrap justify-center p-4 m-0.5">
              {/* card begins here - white*/}
              {results.map((p) => (
                <div
                  key={p._id}
                  className="max-w-xs m-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg"
                >
                  {/* product name */}
                  <div className="p-2 flex justify-center">
                    <span className="font-bold text-xl">{p.name}</span>
                  </div>
                  {/* image */}
                  <img className="w-full h-52" src={p.imageUrl} alt="" />
                  {/* details block */}
                  <div className=" m-2 p-2">
                    {/* product long description */}
                    <div className="border-b-2 ">
                      <span className="block ">
                        {p.description.substring(0, 85)}
                        <span className="text-lg text-purple-400">more...</span>
                      </span>
                    </div>
                    {/* product details */}
                    <div className="flex flex-col items-center border-b-2 ">
                      <span>20 MP</span>
                      <span>sensor type CCD</span>
                      <span>LCD size 2.7</span>
                    </div>
                    {/* price EMI ratings  */}
                    <div className="flex text-gray-500">
                      {/* price */}
                      <span className="">${p.price}</span>
                      {/* EMI */}
                      <span className="ml-2">(EMI from {p.emi})</span>
                      {/* ratings */}
                      <span className="ml-auto">{p.ratings}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-3 text-lg">
            you can search your favourite products
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBoxResults;
