const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: "FETCH_CATEGORIES",
  });
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categoriesData = await response.json();
    dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoriesData});
  } catch (error) {
    dispatch({type: "FETCH_CATEGORIES_FAILURE",payload: error,
    });
  }
};





export default {
  fetchCategories
};
