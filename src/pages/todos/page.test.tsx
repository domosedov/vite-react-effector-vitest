import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "effector-react/scope";
import { fork, Scope } from "effector";
import { TodosPage } from "./page";

let scope: Scope;

beforeAll(() => {
  scope = fork();
});

describe("todos page", () => {
  it("should render loading", async () => {
    render(
      <Provider value={scope}>
        <TodosPage />
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    expect(await screen.findByRole("list")).toBeInTheDocument();
  });
});
