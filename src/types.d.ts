export interface TODO {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
}

export type ToDoState = {
  todos: TODO[];
  metrics: {
    total: number;
    completed: number;
  };
  activeFilter: string;
};

