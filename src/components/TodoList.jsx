import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import { useMemo } from 'react';

export default function TodoList({ filter }) {
  const { todos } = useTodos();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'concluidas': return todos.filter(t => t.done);
      case 'pendentes': return todos.filter(t => !t.done);
      default: return todos;
    }
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
