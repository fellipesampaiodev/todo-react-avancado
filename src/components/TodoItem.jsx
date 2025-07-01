import { useTodos } from '../context/TodoContext';
import React from 'react';

function TodoItem({ todo }) {
  const { dispatch } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}>
        Remover
      </button>
    </li>
  );
}

export default React.memo(TodoItem);
