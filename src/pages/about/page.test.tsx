import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { fork } from "effector";
import { Provider } from "effector-react/scope";
import { AboutPage } from "./page";
import * as model from "~/model";

describe("about page", () => {
  const scope = fork({ values: [[model.$text, "test "]] });

  it("input test", () => {
    render(
      <Provider value={scope}>
        <AboutPage />
      </Provider>
    );
    const input = screen.getByRole("textbox");

    user.type(input, "test");

    expect(input).toHaveValue("test test");
    expect(scope.getState(model.$text)).toEqual("test test");
  });
});
