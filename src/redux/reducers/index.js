import products from "./fetch.products.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
