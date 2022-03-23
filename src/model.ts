import { createStore, createEvent } from "effector";
import { createCounter } from "~/shared/factories/create_counter";

export const { count, increment } = createCounter();

export const changeText = createEvent<string>();

export const $text = createStore("").on(changeText, (_, text) => text);

$text.watch(console.log);
