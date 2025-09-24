import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export function Home() {
  const { todos, addTodo, toggleTodo, toggleFavorite } = useTodos();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>React: To-Do List com Favoritos</h1>
        <div className="nav-link">
          Favoritos ({todos.filter(todo => todo.isFavorite).length})
        </div>
      </header>
      
      <main className="main">
        <form onSubmit={handleAddTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Adicionar nova tarefa..."
            className="todo-input"
          /> 
          <button type="submit" className="add-button">
            ➕+ 
          </button>
        </form>

        <div className="todos-container">
          {todos.length === 0 ? (
            <p className="empty-message">Nenhuma tarefa adicionada ainda.</p>
          ) : (
            <ul className="todos-list">
              {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.isDone ? 'done' : ''}`}>
                  <div className="todo-content">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`todo-checkbox ${todo.isDone ? 'checked' : ''}`}
                    >
                      {todo.isDone ? '✅' : '⭕'}
                    </button>
                    <span className="todo-text">{todo.text}</span>
                    <button
                      onClick={() => toggleFavorite(todo.id)}
                      className={`favorite-button ${todo.isFavorite ? 'favorited' : ''}`}
                    >
                      {todo.isFavorite ? '⭐' : '☆'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
