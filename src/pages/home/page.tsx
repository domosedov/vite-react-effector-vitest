import * as React from "react";
import { reflect } from "@effector/reflect";
import { Link } from "react-router-dom";
import * as model from "~/model";

type ViewProps = {
  count: number;
  increment: () => void;
};

const View: React.FC<ViewProps> = ({ count, increment }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <Link to="/todos">Todos</Link>
      <button onClick={increment} type="button">
        Inc
      </button>
    </div>
  );
};

export const HomePage = reflect({
  view: View,
  bind: {
    count: model.count,
    increment: model.increment,
  },
});
