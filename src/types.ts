// src/types.ts
export interface Task {
  id: number;       // [cite: 33]
  text: string;     // [cite: 35]
  isDone: boolean;  // [cite: 36]
  isFavorite: boolean; // [cite: 37]
}

export interface TasksContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTaskDone: (id: number) => void;
  toggleTaskFavorite: (id: number) => void;
  notification: string;
  setNotification: (message: string) => void;
}


