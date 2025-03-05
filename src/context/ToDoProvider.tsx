import { TODO } from "@/constants/todo";
import { ToDoContext } from "./ToDoContext";
import { JSX, useMemo, useState, ReactNode, FC, useCallback, useEffect } from "react";
import { deleteTodo, getAllTodo, updateTodo } from "@/features/todo";

interface ToDoProviderProps {
  children: ReactNode | JSX.Element;
}

const ToDoProvider: FC<ToDoProviderProps> = ({ children }) => {
  const [ToDoList, setToDoList] = useState<TODO[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // get all todos from local storage for initial values
    const todos = getAllTodo();
    setToDoList(todos);
  }, []);

  const completedCount = useMemo(() => {
    console.log("Calculating completed count");
    return ToDoList.filter((todo) => todo.isComplete).length;
  }, [ToDoList]);

  const handleComplete = useCallback(
    (id: string) => {
      const updatedList = ToDoList.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, isComplete: true };
          updateTodo(todo.id, updatedTodo);
          return updatedTodo;
        }
        return todo;
      });
      setToDoList(updatedList);
    },
    [ToDoList]
  );

  const toDoDisplay = useMemo(() => {
    return ToDoList.filter((todo) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "completed") return todo.isComplete;
      return false;
    });
  }, [ToDoList, activeFilter]);

  const handleDelete = useCallback((id: string) => {
    const updatedList = ToDoList.filter((todo) => todo.id !== id);
    deleteTodo(id);
    setToDoList(updatedList);
  }, [ToDoList]);

  const handleEdit = useCallback((id: string, data: TODO) => {
    const updatedList = ToDoList.map((todo) => {
      if (todo.id === id) {
        updateTodo(todo.id, data);
        return data;
      }
      return todo;
    });
    updateTodo(id, data);
    setToDoList(updatedList);
  }, [ToDoList]);

  return (
    <ToDoContext.Provider
      value={{
        todos: toDoDisplay,
        metrics: {
          total: ToDoList.length,
          completed: completedCount,
        },
        activeFilter,
        setActiveFilter,
        handleComplete,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
