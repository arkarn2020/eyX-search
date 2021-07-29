import axios from 'axios';
import React, { useReducer } from 'react';

import initialState from './a-initialState.jsx';
import actions from './b-actions.jsx';
import FetchProductContext from './c-context.jsx';
import reducer from './d-reducer.jsx';

const FetchProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    loading: state.loading,
    error: state.error,
    products: state.products,

    fetchAllProducts: async () => {
      dispatch({ type: actions.FETCH_PRODUCTS_REQUEST });
      try {
        const res = await axios.get('http://localhost:5000/products');
        dispatch({ type: actions.FETCH_PRODUCTS_SUCCESS, payload: res.data });
      } catch (error) {
        dispatch({ type: actions.FETCH_PRODUCTS_FAILURE, payload: error });
      }
    },
  };

  return (
    <FetchProductContext.Provider value={value}>
      {children}
    </FetchProductContext.Provider>
  );
};

export default FetchProductContextProvider;
