import React from "react";
import { Router } from "react-router-dom";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import { createBrowserHistory } from "history";
import Routes from "./lib/routes";

const App = ({ history }) => {
  const localHistory = history || createBrowserHistory();

  const routerConfig = {
    push: route => {
      localHistory.push(route);
    },
    prefetch: () => {}
  };

  return (
    <HvProvider router={routerConfig}>
      <Router history={localHistory}>
        <Routes />
      </Router>
    </HvProvider>
  );
};

export default App;
