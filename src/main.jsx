import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import FetchProductContextProvider from './state/fetchProducts/e-provider.jsx';
import SearchProductContextProvider from './state/searchProducts/e-provider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <FetchProductContextProvider>
      <SearchProductContextProvider>
        <App />
      </SearchProductContextProvider>
    </FetchProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
