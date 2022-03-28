import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { fork } from "effector";
import { Provider } from "effector-react/scope";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./page";
import * as model from "~/model";

describe("app.tsx", () => {
  const scope = fork({ values: [[model.count, 10]] });
  it("renders without crashing", () => {
    render(
      <Provider value={scope}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

    const increment = screen.getByText(/Inc/);

    user.click(increment);
    user.click(increment);

    expect(heading).toHaveTextContent(/12/);
  });
});
