import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import Detailpage from "./components/detail_page/detail_page"

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/detailpage" component={Detailpage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
