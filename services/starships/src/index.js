import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const service = `${process.env.SERVICE_NAME}-${process.env.SERVICE_ID}`;

const render = (id = "root", history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(id));
};

if (window[service]) {
  window[`render${service}`] = (containerId, containerHistory) =>
    render(containerId, containerHistory);

  window[`unmount${service}`] = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
} else {
  render();
}
