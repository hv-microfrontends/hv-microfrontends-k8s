import React from "react";
import ReactDOM from "react-dom";
import { service } from "@hv/utils";
import App from "./App";

const serviceId = `${process.env.SERVICE_NAME}-${process.env.SERVICE_ID}`;

service.registry({
  id: serviceId,

  onRender: (id, history) => {
    ReactDOM.render(
      <App history={history} />,
      document.getElementById(id || "root")
    );
  },

  onUnmount: id => {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
  }
});
