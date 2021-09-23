const initialState = {
  productItems: [],
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        productItems: action.payload,
      };
    default:
      return state;
  }
};

export default Products;
