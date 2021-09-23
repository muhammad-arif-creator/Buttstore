const fetchProducts = () => async (dispatch) => {
  dispatch(requestProducts())
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const productData = await response.json()
    dispatch(requestSuccessProducts(productData))
  } catch (error) {
    dispatch(requestFailureProducts(error))
  }
}

const requestProducts = () => {
  return {
    type: 'FETCH_DATA',
  }
}

const requestSuccessProducts = (data) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: data,
  }
}

const requestFailureProducts = (errorData) => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: errorData,
  }
}

export default {
  fetchProducts,
  requestProducts,
  requestSuccessProducts,
  requestFailureProducts,
}
