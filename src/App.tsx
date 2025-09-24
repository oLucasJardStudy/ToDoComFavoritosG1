import { useState } from 'react';
import './App.css';

interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  isFavorite: boolean;
  createdAt: Date;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(), 
        text: text.trim(),
        isDone: false,
        isFavorite: false,
        createdAt: new Date()
      };
      setTodos(prev => [...prev, newTodo]);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const toggleFavorite = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
    ));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText(''); 
  };

  const favoriteCount = todos.filter(todo => todo.isFavorite).length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>React: To-Do List sem favoritos kkk</h1>
          <div className="nav-link">
            Favoritos ({favoriteCount})
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
              ➕
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
                        title={todo.isDone ? 'Desmarcar como concluída' : 'Marcar como concluída'}
                      >
                        {todo.isDone ? '✅' : '⭕'}
                      </button>
                      
                      <span className="todo-text">{todo.text}</span>
                      
                      <button
                        onClick={() => toggleFavorite(todo.id)}
                        className={`favorite-button ${todo.isFavorite ? 'favorited' : ''}`}
                        title={todo.isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
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
    </div>
  );
}

export default App;