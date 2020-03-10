import React, { useEffect } from "react";
import { Route } from "react-router";
import Service from "../../../components/common/Service";

const ServicesRoutes = ({ services, getServices }) => {
  useEffect(() => {
    getServices();
  }, []);

  return services.map(service => (
    <Route
      key={service.name}
      path={`/${service.name}`}
      component={() => <Service host={`http://${service.host}`} />}
    />
  ));
};

export default ServicesRoutes;
