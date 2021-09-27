import Products from "./fetch.products.reducer";
import Categories from "./fetch.categories.reducer";
import ProductsDetails from "./fetch.product.details.reducer";
import Cart from "./cart.reducer";
import { combineReducers } from "redux";
import User from "./checkout.reducer";

const rootReducer = combineReducers({
  Products,
  Categories,
  ProductsDetails,
  Cart,
  User,
});

export default rootReducer;
