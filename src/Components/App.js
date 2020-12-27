import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
