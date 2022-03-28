import { type RouteObject } from "react-router-dom";
import { HomePage } from "./home";
import { TodosPage } from "./todos";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
];
