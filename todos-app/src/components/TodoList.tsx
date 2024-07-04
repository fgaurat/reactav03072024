import { Todo } from "../core/Todo";
import TodoRow from "./TodoRow";

interface ITodoListProps{
  todos:Todo[]
  handleDelete:(todo:Todo)=>void
}

function TodoList({todos,handleDelete}:ITodoListProps) {
    

  return (
    <>
      <h2>TodoList</h2>

      <table className="table">
      <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th></th>
        </tr>
      </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoRow 
              key={todo.id} 
              todo={todo} 
              handleDelete={handleDelete}
              />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
