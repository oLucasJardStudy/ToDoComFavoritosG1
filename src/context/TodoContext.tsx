// src/contexts/TasksContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { Task, TasksContextType } from '../types';

// Cria o contexto com um valor padrão
const TasksContext = createContext<TasksContextType | undefined>(undefined);

// Cria o Provedor do Contexto
export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notification, setNotification] = useState<string>(''); // Novo estado

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(), // Usando timestamp como ID único [cite: 33]
      text: text,
      isDone: false,  // Valor inicial [cite: 42]
      isFavorite: false, // Valor inicial [cite: 42]
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
          // Mostra a notificação apenas quando vai de false para true [cite: 59]
          if (!task.isFavorite) {
            taskText = task.text;
          }
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      })
    );

    if (taskText) {
      setNotification(`Tarefa "${taskText}" adicionada aos favoritos!`); // Mensagem dinâmica [cite: 60]
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskDone, toggleTaskFavorite, notification, setNotification }}>
      {children}
    </TasksContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};


