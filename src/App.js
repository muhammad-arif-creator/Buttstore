import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { withRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import loginPage from "./pages/login";
import ProductDetailPage from "./pages/productdetail";
import ProductListingPage from "./pages/productlisting";
import CheckOutPage from "./pages/CheckOutPage";
import SummaryPage from "./pages/SummaryPage";

function App(props) {
  if (window.location.pathname !== "/" && !localStorage.getItem("isLogin")) {
    props.history.push("/");
  }
  return (
    <div className="App">
      <Router>
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
            <Route exact path="/cart" component={CartPage}></Route>
            <Route exact path="/" component={loginPage}></Route>
            <Route exact path="/checkout" component={CheckOutPage}></Route>
            <Route exact path="/summary" component={SummaryPage}></Route>
            <Route
              path="*"
              render={() => {
                <div>
                  <h1>Error Code: 404 </h1>
                  <h2>Page Not Found</h2>
                </div>
              }}
            ></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
