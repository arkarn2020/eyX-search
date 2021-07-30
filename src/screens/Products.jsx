import React, { useEffect, useState } from 'react';

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FetchProductContext from '../state/fetchProducts/c-context.jsx';
import SearchProductContext from '../state/searchProducts/c-context.jsx';

import SearchBoxResults from '../components/SearchBoxResults.jsx';

const Products = () => {
  const { loading, error, products, fetchAllProducts } =
    useContext(FetchProductContext);

  const [search, setSearch] = useState('');
  const history = useHistory();

  const {
    loading: searching,
    products: filterProducts,
    searchProduct,
  } = useContext(SearchProductContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) return 0;

    if (e.charCode === 13 || search.trim()) {
      searchProduct({ search });
    }
  };

  const handleClear = () => {
    window.location.href = window.location.href;
  };
  // console.log(filterProducts.data);

  if (error) return <p>something went wrong, refresh the page</p>;

  return (
    // page red
    <div className="bg-gray-100">
      {/* main container  green */}
      <div className="max-w-6xl mx-auto  ">
        {/* search container pink */}
        <div className="p-7">
          {/* *************** */}
          {/* search group */}
          <form onSubmit={handleSearch}>
            <div className="h-10 flex justify-around md:justify-evenly items-center">
              {/* search box form */}
              <input
                className="h-8 sm:h-12 w-40 md:w-96 p-2 border-2 border-purple-400 rounded-lg text-sm sm:text-lg"
                type="text"
                placeholder=" search awesome products ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* button group */}
              <div className="">
                <button
                  type="submit"
                  className="ark-btn px-2 text-white bg-purple-400 "
                >
                  {/* search icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleClear}
                  className="ark-btn sm:ml-6 ml-1 px-2 text-white bg-purple-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* search results */}
        <SearchBoxResults searching={searching} results={filterProducts.data} />

        {/* card container gray */}
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            <span className="flex justify-center text-xl md:text-3xl mt-2">
              all products on eyX
            </span>
            <div className="flex flex-wrap justify-center p-4 m-0.5">
              {/* card begins here - white*/}
              {products.map((p) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
