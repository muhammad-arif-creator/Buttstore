const fetchCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categoriesData = await response.json();
    dispatch(requestSuccessCategories(categoriesData));
  } catch (error) {
    dispatch(requestFailureCategories(error));
  }
};

const requestCategories = () => {
  return {
    type: "FETCH_CATEGORIES",
  };
};

const requestSuccessCategories = (data) => {
  console.log(data);
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: data,
  };
};

const requestFailureCategories = (errorData) => {
  return {
    type: "FETCH_CATEGORIES_FAILURE",
    payload: errorData,
  };
};

export default {
  fetchCategories,
  requestCategories,
  requestSuccessCategories,
  requestFailureCategories,
};
