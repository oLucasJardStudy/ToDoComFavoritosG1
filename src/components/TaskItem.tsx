// src/components/TaskItem.tsx
import { useTasks } from '../context/TodoContext';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTaskDone, toggleTaskFavorite } = useTasks();

  const taskTextStyle = {
    textDecoration: task.isDone ? 'line-through' : 'none', // Estilo para tarefa concluída [cite: 47]
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTaskDone(task.id)} // Botão para concluir [cite: 46]
      />
      <span style={taskTextStyle}>{task.text}</span>
      <button onClick={() => toggleTaskFavorite(task.id)}> {/* Botão para favoritar [cite: 48] */}
        {task.isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default TaskItem;
