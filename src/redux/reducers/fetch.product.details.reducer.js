const initialState = {
    productDetails: {},
  };
  
  const ProductsDetails = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_DETAILS":
        return {
          ...state,
        };
      case "FETCH_PRODUCT_DETAILS_SUCCESS":
        return {
          ...state,
          productDetails: action.payload,
        };
      case 'FETCH_PRODUCT_DETAILS_FAILURE':
          return{
              ...state,
              productDetails: action.payload,

          }
      default:
        return state;
    }
  };
  
  export default ProductsDetails;
  