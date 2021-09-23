import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "./components/detail_page/detail_page";
import Login from "./components/login/Login";
import { withRouter } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App(props) {
  if (window.location.pathname !== "/" && !localStorage.getItem("isLogin")) {
    props.history.push("/");
  }
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/detail-page" component={DetailPage}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
