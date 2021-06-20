import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Hot from "../routes/Hot";
import Regular from "../routes/Regular";
import "./../../App.css";
import Logo from "./Logo";
export default function NavigationRoute() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul className="navigation_list">

            <li>
              <NavLink to="/hot" activeClassName="selected_link" className="link">
                HOT
              </NavLink>
            </li>
            <li>
              <NavLink to="/regular" activeClassName="selected_link" className="link">
                REGULAR
              </NavLink>
            </li>
            <NavLink to="/">
              </NavLink>
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
