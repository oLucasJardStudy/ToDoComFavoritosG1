// src/pages/Home.tsx
import { useState } from 'react';
import { useTasks } from '../context/TodoContext';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { tasks, addTask } = useTasks(); // Consome o estado do contexto

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/* Formulário para adicionar tarefa [cite: 41] */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>

      {/* Lista de todas as tarefas [cite: 43] */}
      <div>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
