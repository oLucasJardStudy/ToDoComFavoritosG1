// Interface para as tarefas do todo list
export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  isFavorite: boolean;
  createdAt: Date;
}


