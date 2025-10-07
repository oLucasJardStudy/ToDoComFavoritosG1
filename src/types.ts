// Definições de tipos TypeScript para a aplicação
export interface Task {
  id: number;
  text: string;
  isDone: boolean;
  isFavorite: boolean;
}

export interface TasksContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTaskDone: (id: number) => void;
  toggleTaskFavorite: (id: number) => void;
  notification: string;
  setNotification: (message: string) => void;
}