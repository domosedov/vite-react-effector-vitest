import * as React from "react";
import { createStore, createEvent, createEffect } from "effector";
import { createCounter } from "~/shared/factories/create_counter";

export const { count, increment } = createCounter();

export const changeText = createEvent<React.ChangeEvent<HTMLInputElement>>();

export const $text = createStore("").on(
  changeText,
  (_, event) => event.target.value
);
