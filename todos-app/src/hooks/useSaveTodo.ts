import { useState } from "react";
import { Todo } from "../core/Todo";
import { fetchSaveTodo } from "../services/todoService";



export default function useSaveTodo(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const saveTodo = async (todo:Todo)=>{
        setIsLoading(true)
        const savedTodo:Todo = await fetchSaveTodo(todo)
        setIsLoading(false)
        return savedTodo;
    }

    return {saveTodo,isLoading}
}