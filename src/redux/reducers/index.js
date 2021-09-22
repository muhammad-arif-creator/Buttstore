import fetchProducts from "./fetch.products.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetchProducts,
});

export default rootReducer;
