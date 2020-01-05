import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ServiceRoutes from "./utils/ServiceRoutes";
import routes from "../config/services";
import Header from "./Header";
import Page from "./Page";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/page" render={Page} />
        <ServiceRoutes routes={routes} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
