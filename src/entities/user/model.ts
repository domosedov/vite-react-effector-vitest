import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { createEffect, createEvent, createStore } from "effector";
import { User } from "./types";

export const fetchUserFx = createEffect<
  void,
  AxiosResponse<User, void>,
  AxiosError<unknown, void>
>(() =>
  axios({
    url: "https://jsonplaceholder.typicode.com/users/1",
    method: "GET",
  })
);

export const clearUser = createEvent();

export const $user = createStore<User | null>(null);

$user.on(fetchUserFx.doneData, (_, res) => res.data).reset(clearUser);
