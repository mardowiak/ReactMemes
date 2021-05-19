import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hot from "../Hot"
import Regular from "../Regular"
export default function NavigationRoute() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOT</Link>
            </li>
            <li>
              <Link to="/regular">REGULAR</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/regular">
            <Regular />
          </Route>
          <Route path="/">
            <Hot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
