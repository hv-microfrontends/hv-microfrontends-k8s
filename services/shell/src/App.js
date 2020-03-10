import React, { Suspense } from "react";
import { Provider } from "react-redux";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./store";
import Routes from "./lib/routes";

const App = () => (
  <Provider store={store}>
    <HvProvider>
      <ConnectedRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </ConnectedRouter>
    </HvProvider>
  </Provider>
);

export default App;
