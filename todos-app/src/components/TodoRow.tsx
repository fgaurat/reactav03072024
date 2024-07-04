import React from "react";
import { Todo } from "../core/Todo";

interface TodoRowProps {
  todo: Todo
  handleDelete:(todo:Todo)=>void
}

function TodoRow({ todo,handleDelete }: TodoRowProps) {
  

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? "Completed" : "Not Completed"}</td>
      <td>
        <button className="btn btn-danger" onClick={()=> handleDelete(todo)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoRow;
