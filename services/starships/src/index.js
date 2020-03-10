import React from "react";
import ReactDOM from "react-dom";
import { service } from "@hv/utils";
import App from "./App";

const serviceId = `${process.env.SERVICE_NAME}-${process.env.SERVICE_ID}`;

service.load({
  id: serviceId,

  onRender: (container, history) => {
    ReactDOM.render(
      <App history={history} />,
      document.getElementById(container || "root")
    );
  },

  onUnmount: container => {
    // ReactDOM.unmountComponentAtNode(document.getElementById(container));
  }
});

export default App;
