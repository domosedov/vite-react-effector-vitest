import * as React from "react";
import { reflect } from "@effector/reflect/ssr";
import { Button as ButtonView } from "./shared/ui/button";
import * as model from "./model";
import { useStore } from "effector-react/scope";

const Button = reflect({
  view: ButtonView,
  bind: {
    onClick: model.increment as VoidFunction,
  },
});

const Input = reflect({
  view: (props: JSX.IntrinsicElements["input"]) => <input {...props} />,
  bind: {
    value: model.$text,
    onChange: model.changeText.prepend((event) => event.target.value),
  },
});

export const App: React.FC = () => {
  const count = useStore(model.count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button>Hello</Button>
      <Input />
    </div>
  );
};
