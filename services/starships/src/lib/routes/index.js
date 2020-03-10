import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Starships from "../../pages/Starships";
import StarshipsDetails from "../../pages/StarshipsDetails";
import NotFound from "../../pages/NotFound";
import withLayout from "../hocs/withLayout";

const Routes = ({ isEmbed }) => (
  <Switch>
    <Route exact path="/starships" component={withLayout(Starships, isEmbed)} />
    <Route
      exact
      path="/starships/:id"
      component={withLayout(StarshipsDetails, isEmbed)}
    />
    <Redirect exact from="/" to="/starships" />
    <Route component={withLayout(NotFound, isEmbed)} />
  </Switch>
);

export default Routes;
