import { Todo } from "../core/Todo";

export const fetchTodos = async () => {
  const response = await fetch(import.meta.env.VITE_TODOS_URL);
  return response.json();
};

export const fetchDeleteTodo = async (todo: Todo) => {
  const url = `${import.meta.env.VITE_TODOS_URL}/${todo.id}`;
  return await fetch(url, {
    method: "DELETE",
  });
};

export const fetchSaveTodo = async (todo: Todo) => {
  const url = import.meta.env.VITE_TODOS_URL;
  const response= await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  })
  return await response.json();
};
