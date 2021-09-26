const fetchProducts = (category) => async (dispatch) => {
  dispatch({ type: "FETCH_DATA" });
  try {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      console.log("I am in if"+category);
      url = `${url}/category/${category}`;
    }
    const response = await fetch(url);
    const productData = await response.json();
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: productData });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error });
  }
};

const productAdded=(payload)=>{
  return {
      type: "PRODUCT_ADDED",
      payload:payload
  }
}

export default {
  fetchProducts,
};
