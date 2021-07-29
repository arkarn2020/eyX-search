import actions from './b-actions.jsx';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_REQUEST:
      return {
        loading: true,
        error: false,
        products: [],
      };

    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };

    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };

    default:
      return state;
  }
};

export default reducer;
