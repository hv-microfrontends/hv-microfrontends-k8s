import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import List from "./List";
import Details from "./Details";

const defaultHistory = createBrowserHistory();

const App = ({ history }) => (
  <Router history={history || defaultHistory}>
    <Switch>
      <Route exact path="/people" component={List} />
      <Route exact path="/people/:id" component={Details} />
    </Switch>
  </Router>
);

export default App;
