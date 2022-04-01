import * as React from "react";
import {
  Link,
  unstable_HistoryRouter as Router,
  useRoutes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "~/pages";

const history = createBrowserHistory();

const Routes = () => useRoutes(routes);

export const App: React.FC = () => {
  return (
    <Router history={history}>
      <nav className="flex gap-2">
        <Link
          to="/"
          className="px-6 py-2 rounded bg-lime-500 text-white text-xs uppercase font-bold tracking-wider"
        >
          Home
        </Link>
        <Link
          to="/todos"
          className="px-6 py-2 rounded bg-lime-500 text-white text-xs uppercase font-bold tracking-wider"
        >
          Todos
        </Link>
        <Link
          to="/about"
          className="px-6 py-2 rounded bg-lime-500 text-white text-xs uppercase font-bold tracking-wider"
        >
          About
        </Link>
      </nav>
      <Routes />
    </Router>
  );
};
