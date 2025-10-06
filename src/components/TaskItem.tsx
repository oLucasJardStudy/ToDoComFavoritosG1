// src/components/TaskItem.tsx
import { useTasks } from '../context/TodoContext';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTaskDone, toggleTaskFavorite } = useTasks();

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTaskDone(task.id)} // Botão para concluir [cite: 46]
      />
      <span className={`task-text ${task.isDone ? 'completed' : ''}`}>{task.text}</span>
      <button 
        className="favorite-button"
        onClick={() => toggleTaskFavorite(task.id)} // Botão para favoritar [cite: 48]
      >
        {task.isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default TaskItem;
