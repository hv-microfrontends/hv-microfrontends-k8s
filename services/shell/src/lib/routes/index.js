import React from "react";
import { Route, Switch } from "react-router";
import Dummy from "../../pages/Dummy";
import NotFound from "../../pages/NotFound";
// import ServicesRoutes from "./ServicesRoutes";
import Service from "../../components/common/Service";

const services = [
  {
    name: "starships",
    host: "localhost:3001"
  }
];

const Routes = () => (
  <Switch>
    {services.map(service => (
      <Route
        key={service.name}
        path={`/${service.name}`}
        component={({ history }) => (
          <Service host={`http://${service.host}`} history={history} />
        )}
      />
    ))}
    <Route path="/dummy" component={Dummy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
