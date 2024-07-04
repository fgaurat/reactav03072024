import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../core/Todo'
import { fetchTodos } from '../../services/todoService'

export interface TodoListState {
  todos: Todo[]
}

const initialState: TodoListState = {
    todos:[]
}


// First, create the thunk
export const fetchTodosAsync = createAsyncThunk(
    'todos/fetchTodosAsync',
    async () => {
      const todos = await fetchTodos()
      return todos
    },
  )



export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
//   extraReducers:{
//     [fetchTodosAsync.fulfilled.type]:(state:TodoListState,action:PayloadAction<Todo[]>)=>{
//         state.todos = action.payload
//     }
//   }
extraReducers: (builder: ActionReducerMapBuilder<TodoListState>) => {
    builder
      .addCase(
        fetchTodosAsync.fulfilled,
        (state: TodoListState, action: PayloadAction<Todo[]>) => {
          state.todos = action.payload;
        }
      )
    }
})


export default todosSlice.reducer





