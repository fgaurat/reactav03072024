import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Todo } from "./core/Todo";
import useSaveTodo from "./hooks/useSaveTodo";
import useFetchTodos from "./hooks/useFetchTodos";
import useDeleteTodo from "./hooks/useDeleteTodo";

function App() {
  const {todos,setTodos} = useFetchTodos();
  const {deleteTodo} = useDeleteTodo()
  const [count, setCount] = useState(0);
  const {saveTodo} = useSaveTodo()
  useEffect(() => {
    console.log("Mount");
  }, []);

  console.log("render app");

  const handleSubmit = async (todo:Todo)=>{
    const savedTodo = await saveTodo(todo)
    console.log(savedTodo)
    todos.push(savedTodo)

  }
  
  const handleDelete = async (todo: Todo) => {
    await deleteTodo(todo)
    const newTodos = todos.filter( t => t.id !== todo.id)
    setTodos(newTodos)
  };  
  return (
    <>
      <h1>Vite + React</h1>

      <HelloWorld name="GAURAT" firstName="Fred" />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TodoList todos={todos} handleDelete={handleDelete}/>
          </div>
          <div className="col">
            <TodoForm submitTodo={handleSubmit}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
