const fetchProducts = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        state,
      };
    default:
      return state;
  }
};

export default fetchProducts;
