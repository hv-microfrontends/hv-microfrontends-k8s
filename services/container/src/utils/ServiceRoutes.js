import React from "react";
import { Route } from "react-router-dom";
import ServiceLoader from "./ServiceLoader";

const ServicesRoutes = ({ routes }) =>
  routes.map((route, i) => (
    <Route
      key={i}
      path={`/${route.path}`}
      component={({ history }) => (
        <ServiceLoader
          history={history}
          host={`http://${route.host}:${route.port}`}
        />
      )}
    />
  ));

export default ServicesRoutes;
