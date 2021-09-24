import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import { withRouter } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Hoc from "./components/HOC/Hoc";
import loginPage from "./pages/login";
import ProductDetailPage from "./pages/productdetail";
import ProductListingPage from "./pages/productlisting";

function App(props) {
  if (window.location.pathname !== "/" && !localStorage.getItem("isLogin")) {
    props.history.push("/");
  }
  return (
    <div className="App">
      <Router>
       <Hoc>
       <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route
            path="/products/:category"
            component={ProductListingPage}
          ></Route>
          <Route
            exact
            path="/product-detail/:id"
            component={ProductDetailPage}
          ></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/" component={loginPage}></Route>
        </Switch>
       </Hoc>
      </Router>
    </div>
  );
}

export default withRouter(App);
