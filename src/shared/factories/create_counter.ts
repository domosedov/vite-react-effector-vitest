import { createStore, createApi } from "effector";

export const createCounter = () => {
  const $count = createStore(0);
  const { decrement, increment } = createApi($count, {
    decrement: (c) => c - 1,
    increment: (c) => c + 1,
  });

  return { count: $count, decrement, increment };
};
