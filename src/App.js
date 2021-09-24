import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "./components/detail_page/detail_page";
import Login from "./components/login/Login";
import { withRouter } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/footer/Footer";
import Banner from "./components/Banner/Banner";
import Hoc from "./components/HOC/Hoc";

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
          <Route exact path="/detail-page/:id" component={DetailPage}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/" component={Login}></Route>
        </Switch>
       </Hoc>
      </Router>
    </div>
  );
}

export default withRouter(App);
