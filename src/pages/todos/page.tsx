import * as React from "react";
import { useStore, useEvent } from "effector-react";
import { model as todoModel } from "~/entities/todo";
import { model as userModel } from "~/entities/user";
import * as pageModel from "./model";

export const TodosPage: React.FC = () => {
  const todos = useStore(todoModel.$todos);
  const user = useStore(userModel.$user);
  const isLoading = useStore(pageModel.$isPending);
  const [mount, unmount] = useEvent([
    pageModel.pageMounted,
    pageModel.pageUnmounted,
  ]);
  React.useEffect(() => {
    mount();
    return () => {
      unmount();
    };
  }, [mount, unmount]);

  if (user === null || todos.length === 0) return <div>Loading...</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={"container"}>
      <h1>Todos Page</h1>
      <div className="user-card">{user.name}</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
