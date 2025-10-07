// Context API para gerenciamento global de estado das tarefas
import { createContext, useState, useContext, ReactNode } from 'react';
import { Task, TasksContextType } from '../types';

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notification, setNotification] = useState<string>('');

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      isDone: false,
      isFavorite: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTaskDone = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleTaskFavorite = (id: number) => {
    let taskText = '';
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          if (!task.isFavorite) {
            taskText = task.text;
          }
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      })
    );

    if (taskText) {
      setNotification(`Tarefa "${taskText}" adicionada aos favoritos!`);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskDone, toggleTaskFavorite, notification, setNotification }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
