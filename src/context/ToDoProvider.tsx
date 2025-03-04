import { DummyToDo, TODO } from "@/constants/todo";
import { ToDoContext } from "./ToDoContext";
import { JSX, useMemo, useState, ReactNode, FC, useCallback } from "react";

interface ToDoProviderProps {
  children: ReactNode | JSX.Element;
}

const ToDoProvider: FC<ToDoProviderProps> = ({ children }) => {
  const [ToDoList, setToDoList] = useState<TODO[]>(DummyToDo);
  const [activeFilter, setActiveFilter] = useState("all");

  const completedCount = useMemo(() => {
    console.log("Calculating completed count");
    return ToDoList.filter((todo) => todo.isComplete).length;
  }, [ToDoList]);

  const handleComplete = useCallback(
    (id: string) => {
      const updatedList = ToDoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: true };
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
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
