import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Hot from "../routes/Hot";
import Regular from "../routes/Regular";
import "./../../App.css";
export default function NavigationRoute() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul className="navigation_list">
            <li>
              <NavLink to="/" activeClassName="selected">
                HOT
              </NavLink>
            </li>
            <li>
              <NavLink to="/regular" activeClassName="selected">
                REGULAR
              </NavLink>
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
