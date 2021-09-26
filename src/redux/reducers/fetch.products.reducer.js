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
      const temp=[]
      for(let i=0;i<action.payload.length;i++)
      {
        const obj={
          ...action.payload[i],
          isAdded:false
        }
        temp.push(obj)
      }
      return {
        ...state,
        productItems: [...temp],
      };
    default:
      return state;
  }
};

export default Products;
