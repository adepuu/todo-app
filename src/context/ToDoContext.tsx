import { TODO } from "@/constants/todo";
import { createContext, useContext } from "react";

type ToDoContextType = {
  todos: TODO[];
  metrics: {
    total: number;
    completed: number;
  };
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  handleComplete: (id: string) => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  metrics: {
    total: 0,
    completed: 0,
  },
  handleComplete: () => {},
  activeFilter: "all",
  setActiveFilter: () => {},
});

export const useToDoContext = () => {
  return useContext(ToDoContext);
};

