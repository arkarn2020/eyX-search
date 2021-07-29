import React, { useReducer } from 'react';
import axios from 'axios';

import initialState from './a-initialState';
import actions from './b-actions';
import SearchProductContext from './c-context';
import reducer from './d-reducer';

const SearchProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    loading: state.loading,
    products: state.products,

    searchProduct: async (searchQuery) => {
      dispatch({ type: actions.SEARCH_PRODUCTS_REQUEST });
      try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:5000/products/search?searchQuery=${
            searchQuery.search || 'none'
          }`
        );
        dispatch({ type: actions.SEARCH_PRODUCTS_SUCCESS, payload: { data } });
      } catch (error) {
        console.log(error);
      }
    },
  };

  return (
    <SearchProductContext.Provider value={value}>
      {children}
    </SearchProductContext.Provider>
  );
};

export default SearchProductContextProvider;
