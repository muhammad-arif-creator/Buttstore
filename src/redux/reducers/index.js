import Products from "./fetch.products.reducer";
import Categories from "./fetch.categories.reducer";
import ProductsDetails from "./fetch.product.details.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Products,
  Categories,
  ProductsDetails
});

export default rootReducer;
