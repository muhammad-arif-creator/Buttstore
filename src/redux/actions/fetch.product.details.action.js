const fetchProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_PRODUCT_DETAILS",
  });

  try {
    dispatch({
      type: "SET_LOADING_TRUE",
    });
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const productDetails = await response.json();
    dispatch({
      type: "FETCH_PRODUCT_DETAILS_SUCCESS",
      payload: productDetails,
    });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT_DETAILS_FAILURE", payload: error });
  }
};

const fetchProductDetailsAction = {
  fetchProductDetails,
};

export default fetchProductDetailsAction;
