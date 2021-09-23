const fetchProducts = () => async (dispatch) => {
  dispatch({type: "FETCH_DATA"});
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productData = await response.json();
    dispatch({type: "FETCH_POSTS_SUCCESS",payload: productData});
  } catch (error) {
    dispatch({type: "FETCH_POSTS_FAILURE",payload: error})}
};


export default {
  fetchProducts
};