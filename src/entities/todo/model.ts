import { createEffect, createEvent, createStore, sample } from "effector";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { Todo } from "./types";

export const fetchTodosFx = createEffect<
  void,
  AxiosResponse<Todo[]>,
  AxiosError<unknown>
>(() =>
  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
    params: { _limit: 5 },
  })
);

export const fetchTodos = createEvent();

export const clearTodos = createEvent();

export const $todos = createStore<Todo[]>([]);

$todos.on(fetchTodosFx.doneData, (_, res) => res.data).reset(clearTodos);

sample({
  clock: fetchTodos,
  target: fetchTodosFx,
});
