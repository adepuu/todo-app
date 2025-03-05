import { TODO } from "@/constants/todo";

const TODO_KEY = "todos";

export const addTodo = (todo: TODO) => {
  const todos = getAllTodo();
  todos.push(todo);
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

export const deleteTodo = (id: string) => {
  const todos = getAllTodo();
  const newTodos = todos.filter(todo => todo.id !== id);
  localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
}

export const updateTodo = (id: string, newData: TODO) => {
  const todos = getAllTodo();
  const newTodos = todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        isComplete: newData.isComplete,
        title: newData.title,
        description: newData.description
      }
    }
    return todo;
  });
  localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
}

export const getTodo = (id: string) => {
  return getAllTodo().find(todo => todo.id === id);
}

export const getAllTodo = () => {
  const result: TODO[] = JSON.parse(localStorage.getItem(TODO_KEY) || "[]");
  return result;
}