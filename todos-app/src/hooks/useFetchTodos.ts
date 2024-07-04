import { useEffect, useState } from "react";
import { Todo } from "../core/Todo";
import { fetchTodos } from "../services/todoService";

export default function useFetchTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const todos: Todo[] = await fetchTodos();
      setTodos(todos);
    })();
  }, []);

  return { todos, setTodos };
}
