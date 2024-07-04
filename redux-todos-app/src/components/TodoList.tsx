import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchTodosAsync } from "../features/todos/todosSlice";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todoListState.todos);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTodosAsync())
  }, [dispatch])
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map( todo => (
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>
                <td></td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
