import React from "react";
import { Route, Switch } from "react-router";
import Dummy from "../../pages/Dummy";
import NotFound from "../../pages/NotFound";

const Routes = () => (
  <Switch>
    <Route path="/dummy" component={Dummy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
