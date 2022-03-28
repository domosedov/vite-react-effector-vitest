import { fork, allSettled } from "effector";
import { createCounter } from "./create_counter";

describe("counter test", () => {
  const { count, increment, decrement } = createCounter();

  it("increment test", async () => {
    const scope = fork();

    allSettled(increment, { scope });

    expect(scope.getState(count)).toBe(1);
  });

  it("decrement test", async () => {
    const scope = fork({
      values: [[count, 10]],
    });

    allSettled(decrement, { scope });

    expect(scope.getState(count)).toBe(9);
  });
});
