import * as React from "react";
import { reflect } from "@effector/reflect";
import * as model from "~/model";

const View: React.FC<{
  text: string;
  textChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ text, textChange }) => {
  return (
    <div>
      <h1>About page</h1>
      <input
        className="border rounded p-2"
        type="text"
        value={text}
        onChange={textChange}
      />
    </div>
  );
};

export const AboutPage = reflect({
  view: View,
  bind: {
    text: model.$text,
    textChange: model.changeText,
  },
});
