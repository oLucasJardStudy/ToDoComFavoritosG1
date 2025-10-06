// src/pages/Favorites.tsx
import { useTasks } from '../context/TodoContext';
import TaskItem from '../components/TaskItem';

const Favorites = () => {
  const { tasks } = useTasks();
  const favoriteTasks = tasks.filter(task => task.isFavorite); // Filtra apenas as favoritas [cite: 55]

  return (
    <div>
      <h1>Tarefas Favoritas</h1>
      <div>
        {favoriteTasks.length > 0 ? (
          favoriteTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p className="empty-message">Nenhuma tarefa favoritada ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
