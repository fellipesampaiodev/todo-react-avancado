import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({
      type: 'ADD',
      payload: { id: Date.now(), text, done: false }
    });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}