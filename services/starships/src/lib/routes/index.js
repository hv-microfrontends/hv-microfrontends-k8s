import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Starships from "../../pages/Starships";
import StarshipsDetails from "../../pages/StarshipsDetails";
import NotFound from "../../pages/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/starships" component={Starships} />
    <Route exact path="/starships/:id" component={StarshipsDetails} />
    <Redirect exact from="/" to="/starships" />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
