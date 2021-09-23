import Products from "./fetch.products.reducer";
import Categories from "./fetch.categories.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Products,
  Categories,
});

export default rootReducer;
