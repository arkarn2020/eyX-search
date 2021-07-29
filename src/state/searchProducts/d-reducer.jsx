import actions from './b-actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SEARCH_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case actions.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
