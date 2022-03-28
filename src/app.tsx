import * as React from "react";
import { unstable_HistoryRouter as Router, useRoutes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "~/pages";

const history = createBrowserHistory();

const Routes = () => useRoutes(routes);

export const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};
