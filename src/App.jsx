import { useState } from 'react';
import { TodoProvider, useTodos } from './context/TodoContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function AppContent() {
  const [filter, setFilter] = useState('todas');
  const { todos } = useTodos();

  useLocalStorage('todos', todos); // persistência

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm />
      <TodoFilters filter={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}