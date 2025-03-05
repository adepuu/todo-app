import { ToDoState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValues: ToDoState = {
  todos: [],
  metrics: {
    total: 0,
    completed: 0,
  },
  activeFilter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValues,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, id: uuidv4() });
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...action.payload.data, id: todo.id };
          }
          return todo;
        }),
      };
    },
    completeTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isComplete: true };
          }
          return todo;
        }),
      };
    },
    setActiveFilter: (state, action) => {
      return {
        ...state,
        activeFilter: action.payload,
      };
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  completeTodo,
  setActiveFilter,
} = todoSlice.actions;
