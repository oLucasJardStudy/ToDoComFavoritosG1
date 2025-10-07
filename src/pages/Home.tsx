import { useState } from 'react';
import { useTasks } from '../context/TodoContext';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { tasks, addTask } = useTasks();

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma nova tarefa"
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p className="empty-message">Nenhuma tarefa adicionada ainda.</p>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
