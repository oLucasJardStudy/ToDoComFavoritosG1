// Componente para renderizar cada item de tarefa
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
        onChange={() => toggleTaskDone(task.id)}
      />
      <span className={`task-text ${task.isDone ? 'completed' : ''}`}>{task.text}</span>
      <button 
        className="favorite-button"
        onClick={() => toggleTaskFavorite(task.id)}
      >
        {task.isFavorite ? 'Favorito' : 'Favoritar'}
      </button>
    </div>
  );
};

export default TaskItem;
