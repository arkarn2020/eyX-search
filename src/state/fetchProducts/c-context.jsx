import { createContext } from 'react';
import initialState from './a-initialState.jsx';

const FetchProductContext = createContext(initialState);

export default FetchProductContext;
