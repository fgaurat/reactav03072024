import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Todo } from "../core/Todo";

interface ITodoForm{
    title:string
    completed:boolean
}

interface ITodoFormProps{
    submitTodo:(todo:Todo)=>void
}

function TodoForm({submitTodo}:ITodoFormProps) {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITodoForm>();
  
  const onSubmit: SubmitHandler<Todo> = (data) => submitTodo(data);

  return (
    <>
      <h2>TodoForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            aria-describedby="todoTitleHelp"
            {...register("title")} 
          />
          <div id="todoTitleHelp" className="form-text">
            Todo title.
          </div>
        </div>

        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="completed" 
            {...register("completed")} 
            />
          <label className="form-check-label" htmlFor="completed">
            Completed ?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default TodoForm;
