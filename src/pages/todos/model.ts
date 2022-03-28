import { createEvent, createEffect, sample } from "effector";
import { status } from "patronum";
import { model as todoModel } from "~/entities/todo";
import { model as userModel } from "~/entities/user";

export const pageMounted = createEvent();
export const pageUnmounted = createEvent();

const sleepFx = createEffect(
  async () => await new Promise((resolve) => setTimeout(resolve, 1000))
);

export const fetchPageDataFx = createEffect(() =>
  Promise.allSettled([
    todoModel.fetchTodosFx(),
    userModel.fetchUserFx(),
    sleepFx(),
  ])
);

export const $fetchPageDataStatus = status({ effect: fetchPageDataFx });

export const $isPending = fetchPageDataFx.pending;

sample({
  clock: pageMounted,
  target: fetchPageDataFx,
});

sample({
  clock: pageUnmounted,
  target: [userModel.clearUser, todoModel.clearTodos],
});
