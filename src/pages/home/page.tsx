import * as React from "react";
import { reflect } from "@effector/reflect";
import * as model from "~/model";

type ViewProps = {
  count: number;
  increment: () => void;
};

const View: React.FC<ViewProps> = ({ count, increment }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
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
