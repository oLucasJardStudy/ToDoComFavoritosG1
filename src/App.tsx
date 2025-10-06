// src/App.tsx (ou onde suas rotas estão)
import { TasksProvider } from './context/TodoContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Notification from './components/Notification';
import './App.css';

function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <header className="header">
              <h1>React: To-Do List com favoritos</h1>
              <nav className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favoritos" className="nav-link">Favoritos</Link>
              </nav>
            </header>
            
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favorites />} />
              </Routes>
            </main>
          </div>
          <Notification />
        </div>
      </BrowserRouter>
    </TasksProvider>
  );
}

export default App;